---
layout: '../../layouts/MarkDownLayout.astro'
title: 'Serverpodを使ってみた'
pubDate: '2023-07-03'
description: 'Dart でサーバを書くためのフレームワーク"Serverpod"を使ってみた'
author: 'muchimuchi'
tags: ['Dart', 'Flutter', 'Serverpod']
---

# Serverpod
[Serverpod](https://serverpod.dev/)とは Dart でサーバを書くために用意されたフレームワークです。今回はそちらを使ってみての感想をまとめていきます。

# [Get started](https://docs.serverpod.dev/)
## Installing Serverpod
まずは Serverpod をインストールしましょう。公式によると2023/7現在では serverpod は mac と linux で動かすことを推奨されているようです。Windows でも動くようですがまだ実験段階とのことなので Windows ユーザーはもう少し待ったほうがいいかもしれません。Serverpod をインストールするコマンドは以下の通りです。

```bash
$ dart pub global activate serverpod_cli
```

インストールが完了したら

```bash
$ serverpod
```

と打って実行してましょう。インストールが無事成功していればコマンドの詳細が表示されます。当然 Dart を使うわけなので Dart SDK が端末にインストール済みであることが条件です。筆者は Flutter のバージョン管理をするために [fvm](https://fvm.app/) を使っていたので `dart` と打っても `command not found: dart` と出てしまいました。そんなときは `~/.pub-cache/bin` にある `serverpod` のファイル内の `dart` コマンドの箇所を `fvm dart` に変更しましょう。

### Serverpod Insights
Serverpod Insights は Serverpod の開発者が提供しているツールで、サーバの状態を可視化することができます。[こちら](https://docs.serverpod.dev/insights)からダウンロードできます。

## プロジェクトを作ってみよう
実際にプロジェクトを立ち上げてみましょう。Docker Desktop が立ち上がっていることを確認して以下のコマンドを打ってみましょう。

```bash
$ serverpod create study_serverpod
```
プロジェクトの生成が終わると、`study_serverpod_client`, `study_serverpod_flutter`, `study_serverpod_server` の3つのディレクトリがデフォルトで生成されています。それぞれの役割については以下の通りです。

- study_serverpod_client
  - サーバとの通信をするためのコードが入っています。基本は自動生成されたファイルを置く場所なので触らない
- study_serverpod_flutter
  - Flutter でクライアントサイドを書くためのフォルダ。クライアントの処理はこちらで
- study_serverpod_server
  - サーバサイドを書くためのフォルダ。サーバの処理はこちらで

## サーバーを立ち上げよう
Docker Desktop の方も見てましょう。新たなコンテナが生成されています。そのコンテナを以下のコマンドで立ち上げましょう

```bash
$ cd study_serverpod_server
$ docker-compose up --build --detach
$ dart bin/main.dart
```
成功すれば

```bash
Insights listening on port 8081
Server default listening on port 8080
Webserver listening on port 8082
```

とターミナルに表示されます。

## API のエンドポイントを作ってみよう
エンドポイントを追加するためには `study_serverpod_server/lib/src/endpoints` にファイルを追加して `Endpoint` を継承したクラスを作成し Future メソッドを作るだけです。初期段階ではすでに `example_endpoint.dart` がありその中でエンドポイントを追加するコードが書かれています。

```dart
import 'package:serverpod/serverpod.dart';

class ExampleEndpoint extends Endpoint {
  Future<String> hello(Session session, String name) async {
    return 'Hello $name';
  }
}
```

もしプリミティブ型以外で独自の型を持つデータを返したい場合は `study_serverpod_server/lib/src/protocol` に yaml ファイルを追加しクラス名とフィールドを指定してあげます。

```yaml
class: Article  # クラス名
fields:         # フィールド
  title: String
  content: String
  published: DateTime
  isPrime: bool
```

新たな型クラスを追加したら下記コマンドを実行してプロトコルを生成します。
（このコマンドは `study_serverpod_serverpod` のルート直下で実行してください）

```bash
$ serverpod generate
```

完了すると `generated` フォルダに先ほどの yaml ファイルに対応したクラスが生成されます。これで新たな型を返すことができるようになりました。freezed や retrofit を使っている方にとってはコマンド1つでクラスを自動生成してくれて便利という感じが伝わるかと思います。

もしデータベースに同じモデルのテーブルを作りたい場合は先ほどの yaml ファイルに `table` を追加してあげましょう。

```yaml
class: Article  # クラス名
table: articles # テーブル名
fields:         # フィールド
  title: String
  content: String
  published: DateTime
  isPrime: bool
```

再度 generate コマンドを打てば再生成されますが yaml ファイルを変更する度に generate コマンドを打つのはめんどくさいです。そんなときは以下のようなコマンドにすれば変更を監視しくれます。

```bash
$ serverpod generate --watch
```

続いて実際に記事を返すエンドポイントを追加しましょう。 `example_endpoint.dart` に以下のようなコードを追加してください。

```dart
Future<Article> getArticle(Session session, int id) async {
    return Article(
      title: 'Flutter with Serverpod',
      content: 'This is a test article.',
      published: DateTime.now(),
      isPrime: true,
      author: 'test',
    );
  }
```

先ほど `serverpod generated --watch` を実行していたので保存するだけで自動でコードが生成されますがもし ctrl+c で止めてしまった場合は再度 generate コマンドを打ってください。

## Client から API を叩いてみよう
新たに API を追加できたので実際にクライアントから叩いてみましょう。 `study_serverpod_flutter/lib/main.dart` を開いてください。47行目にあるあるメソッドが `hello` API を叩いている処理になっています。

```dart
void _callHello() async {
    try {
      final result = await client.example.hello(_textEditingController.text);
      setState(() {
        _resultMessage = result;
      });
    } catch (e) {
      setState(() {
        _errorMessage = '$e';
      });
    }
  }
```

では記事を取得する処理を追加しましょう。
```dart
final result = await client.example.hello(_textEditingController.text);
final resultArticle = await client.example.getArticle(1);
print(resultArticle);
```

ここまでできたらアプリを起動してみましょう。`study_serverpod_flutter` からアプリを起動させます。（⚠️ Docker のコンテナとサーバーが起動していることを前提としています。）
筆者は iOS のシミュレータで実行するために `pod install` を実行したら以下のようなエラーが出ました。

```bash
[!] An error occurred while processing the post-install hook of the Podfile.

/Users/***/fvm/versions/3.10.3/bin/cache/artifacts/engine/ios/Flutter.xcframework must exist. If you're running pod install manually, make sure "flutter precache --ios" is executed first
```

`flutter precache --ios` を実行してねと書いてあったので実行したらエラーが解消されました。

また、現時点では Android と iOS のシミュレーターで build すると動きませんでした。Android は build 中から全く進まなくなり、iOS は `module 'connectivity_plus' not found` というエラーメッセージが表示されました。調べた限りの対策を試してみましたがダメでした（悔しい）。一応 web だと動くので現時点では web で試してみてください。動作結果が以下の画像になります。ちゃんと API を叩いてその結果を表示できていますね。

<img src="https://res.cloudinary.com/dmrlpyjkl/image/upload/v1688294399/portfolio/blog/Next.js%E3%81%AEApp%20Router%E3%82%92%E8%A7%A6%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2023-07-02_19.39.48_sa9jce.png">

以上が Serverpod を触ってみたになります。Dart でもサーバーサイドをかけるというのはいいですね。次回は DRUD 操作をしてみたいと思います。

- [github](https://github.com/takerucam/study_serverpod)
