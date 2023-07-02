---
layout: '../../layouts/MarkDownLayout.astro'
title: 'Next.jsのApp Routerを触ってみた2'
pubDate: '2023-06-30'
description: 'ルーティングについて'
author: 'muchimuchi'
tags: ['Next.js', 'App Router']
---

# 前回の記事での忘れ物
前回の記事で `App router` について簡単な説明と Nested Layout について説明しました。今回は実際に Next.js のプロジェクトを作成して `App router` を使ってみます。まずは terminal で以下のコマンドを実行します。（今回は yarn を使います）

```bash
$ yarn create next-app
```
続いて TypeScript, ESLint, Tailwind CSS, src ディレクトリ, App router を使うかどうかを選択します。今回は App router を使うので `Yes` を選択します。それ以外はお好みで選んでください。

プロジェクトが生成できたら

```bash
$ yarn dev
```
を実行してみましょう。`http://localhost:3000` にアクセスすると Next.js の初期ページが表示されます。

続いて新たにルートを生成します。`app` ディレクトリの直下に `about` と `blog` ディレクトリを作成しそれぞれのフォルダに `index.tsx` と `layout.tsx` を生成します。ついでにナビゲーターも欲しいので `Header.tsx` も作りましょう。

```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-200 p-10">
      <nav className="flex gap-x-8">
        <Link href="/">トップページ</Link>
        <Link href="/about">アバウト</Link>
        <Link href="/blog">ブログ</Link>
      </nav>
    </header>
  );
}

```
```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

export default function About() {
  return <main className="text-red-500">about</main>;
}
```
```tsx
import Header from "@/app/components/Header";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-200">
      <Header />
      {children}
    </div>
  );
}
```
各ルートの `Layout.tsx` に Header コンポーネントを追加しましたがルートを作る度に毎回 `<Header />` を追加するのは面倒です。そこで app ディレクトリ直下の `Layout.tsx` に追加しましょう。さらに各ルートの `Layout.tsx` から Header コンポーネントを削除します。するとどのページでもナビゲーターを表示することができます。

Nested Layout を実装してみましょう。`app/about/layout.tsx` に以下のコードを追加します。

```tsx
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>ここはAboutのLayoutです</p>
      {children}
    </div>
  );
}
```
/about にアクセスしてみましょう。/about には `RootLayout` と `AboutLayout` の両方が適用されています。これが Nested Layout です。
```bash
app
├── page.tsx      # RootLayoutが適用
├── layout.tsx
├── about
│   ├── page.tsx  # RootLayoutと
│   │             # AboutLayoutが適用
│   └── layout.tsx
└── blog
    ├── page.tsx  # RootLayoutと
    │             # BlogLayoutが適用
    └── layout.tsx
```

# リンクとナビゲーション
App router にはルートの遷移に2種類のナビゲーションを使うことができます。1つが `<Link>` コンポーネントともう1が `useRouter()`Hook です。

## `<Link>` コンポーネント
`<Link>` コンポーネントを使うことで画面をリロードすることなくルートの遷移ができます。`Header.tsx` はすでに `<Link>` コンポーネントを使っていますね。そのためアバウトやブログに遷移するときに Header のナビゲーションがリロードされていないことがわかります。
```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-200 p-10">
      <nav className="flex gap-x-8">
        <Link href="/">トップページ</Link>
        <Link href="/about">アバウト</Link>
        <Link href="/blog">ブログ</Link>
      </nav>
    </header>
  );
```

## useRouter() Hook
`useRouter()` Hook は Next.js の Router オブジェクトを取得するための Hook です。`useRouter()` Hook を使うことで画面をリロードすることなくルートの遷移ができます。`Header.tsx` に `useRouter()` Hook を使ってみましょう。
```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-green-200 p-10">
      <nav className="flex gap-x-8">
        <Link href="/">トップページ</Link>
        <Link href="/about">アバウト</Link>
        <button type="button" onClick={() => router.push("/blog")}>
          ブログ
        </button>
      </nav>
    </header>
  );
}
```
`useRouter()` Hook はクライアントコンポーネントでしか動かせません。そのため明示的にクライアントコンポーネントで動かすということを示すために `use client` を追加しています。

# Route Groups
`app` ディレクトリのフォルダは通常 URL にマッピングされるがフォルダをルートグループとすることでそのフォルダを URL にマッピングさせずに済むことができます。フォルダをルートグループにするにはフォルダを `()` を囲うとできます。例えば `app` 直下に `(sport)` フォルダを作成しフォルダ内に `layout.tsx` を作成します。（いい感じのフォルダ名が思い浮かばなかったのでパッと思いついた`(sport)`にしました😇）

```tsx
export default function SportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-20 bg-red-100">
      <p>ここはスポーツのレイアウト</p>
      {children}
    </div>
  );
}
```
続いて`(sport)`フォルダ内に新たに`baseball`と`soccer`というフォルダを作成、それぞれに`page.tsx`を作成します。また、`soccer`フォルダ内に`Layout.tsx`を作成します。
```tsx
export default function SoccerLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-blue-400 p-6">{children}</div>;
}
```
ここまでで以下のようなツリー構造になっているはずです。
```bash
app
├── page.tsx
├── layout.tsx
│
├── about
│   ├── page.tsx
│   │
│   └── layout.tsx
│
├── blog
│   ├── page.tsx
│   │
│   └── layout.tsx
│
└── (sport)
    ├── baseball
    │      └── page.tsx
    │
    └── soccer
           ├── page.tsx
           │
           └── layout.tsx
```
ついでに`Header.tsx`にも`<Link>`コンポーネントを追加しておきます。
```tsx
// ...
<button type="button" onClick={() => router.push("/blog")}>ブログ</button>
<Link href="/baseball">野球</Link>
<Link href="/soccer">サッカー</Link>
// ...
```
`yarn dev` を実行してみてヘッダーに野球とサッカーが追加されていることを確認しましょう。

野球をクリックすると `localhost:3000/baseball`の URL にアクセスできました。ここでは　`(sport)`　直下に作成した Layout が反映されていることがわかります。続いてヘッダーのサッカーをクリックしてみましょう。すると `localhost:3000/soccer`の URL にアクセスできました。ここでは　`/soccer`　に作成した Layout が反映されていることがわかります。また両方とも URL に (sport) が含まれておらず、ルートグループによって URL にマッピングされないことがわかります。ルートグループによって認証画面やボード画面といった別々の画面で共通のレイアウトを使いまわせることができます。便利！
