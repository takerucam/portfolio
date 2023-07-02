---
layout: '../../layouts/MarkDownLayout.astro'
title: 'Next.jsのApp Routerを触ってみた3'
pubDate: '2023-07-02'
description: 'Loading と Error'
author: 'muchimuchi'
tags: ['Next.js', 'App Router']
---

# Loading UI と ストリーミング
サーバーからデータを取得する際にはデータが取得できるまでローディングを表示したいときがあります。`App Router` では `page.tsx` と同じ階層に `loading.tsx` を作成することで簡単にローディングの UI を生成することです。
```tsx
export default function Spinner({ color = "border-blue-500" }: { color?: string }) {
  return (
    <div className="my-16 flex justify-center">
      <div className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}></div>
    </div>
  );
}
```

```tsx
import Spinner from "@/app/components/Spinner";

export default function Loading() {
  return <Spinner />;
}
```
Loading UI ができたので実際に試してみましょう。`app` 直下の `page.tsx` を以下のように書き換えます。
```tsx
// sleep関数
const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

export default async function Home() {
  await sleep(3000);
  return <main className="text-red-500">top</main>;
}

```
これでルートにアクセスしてみましょう。すると3秒間ローディングが表示された後に `top` が表示されます。最初にも述べたようにこれはデータ取得に使えます。試しに [jsonplaceholder](https://jsonplaceholder.typicode.com/) からデータをとってくるところまでやってみましょう。dev tool を開いてネットワークの速度を Slow 3G にして遅くしておくとローディングが見えやすいです。
```tsx
export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const json = await data.json();
  return <main className="text-red-500">{json.username}</main>;
}
```
他にも `<Suspense>` を使って任意の Loading UI を設定することもできます。
```tsx
import { Suspense } from "react"

export default function Posts() {
  return (
    <Suspense fallback={<p>Loading fetch1</p>}>
      <Fetch1 />
    </Suspense>
    <Suspense fallback={<p>Loading fetch2</p>}>
      <Fetch2 />
    </Suspense>
  )
}
```

## Next.js のストリーミング
Next.js の SSR ではユーザーがページを見て操作できるようになるまで以下の一連の流れがあります。
1. ページのすべてのデータがサーバに取り込まれる
2. サーバーはページの HTML をレンダリングする
3. ページの HTML、CSS、JavaScript がクライアントに送信される
4. 生成された HTML と CSS を使って非インタラクティブが UI が表示される
5. React が UI をインタラクティブにするためにハイドレートする

<img src="https://res.cloudinary.com/dmrlpyjkl/image/upload/v1688191203/portfolio/blog/Next.js%E3%81%AEApp%20Router%E3%82%92%E8%A7%A6%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F/image_yyhj6y.png">

図から分かるようにユーザーに UI が表示されるまで 1-3 を待たなければなりません。これはユーザーがページを見て操作できるようになるまでの時間が長くなってしまいます。これを改善するために Next.js ではストリーミングをサポートしています。Next.js のストリーミングではページの HTML を小さなチャンクに分割しそれらをサーバーからクライアントへ徐々に送信します。これにより UI がレンダリングされる前にすべてのデータがロードされるのを待つことなく、ページの一部をより早くユーザーに表示することができます。

<img src="https://res.cloudinary.com/dmrlpyjkl/image/upload/v1688192116/portfolio/blog/Next.js%E3%81%AEApp%20Router%E3%82%92%E8%A7%A6%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F/image_az849f.png">


# Error Handling
`App Router` では簡単にエラーハンドリングをすることができます。 `page.tsx` と同じ階層に `error.tsx` というファイルを作成してみましょう。
```tsx
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```
エラーを意図的に発生させてみましょう。`page.tsx` の `fetch` する URL を適当なものに変えてみましょう。すると `error.tsx` に記述した任意のエラーメッセージを表示できます。また、Error コンポーネントの props として `reset` 関数を取得でき、それを実行するとエラーから復帰することもできます。

# Middleware
Middleware を使えば `App Router` でページ遷移する前に任意の処理を挟むことができます。例えばログインしていないユーザーがログインが必要なページにアクセスした場合にログインページにリダイレクトするなどの処理が挟めます。`app` と同じ階層に `middleware.ts` というファイルを作成して以下のように記述してみましょう。
```tsx
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/", req.url));
}
export const config = {
  matcher: "/about",
};
```
上記コードでは `/about` にアクセスしようとすると `/` にリダイレクトされるようになっています。matcher を使わず実装するには `startWith()` を使います。
```tsx
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/about")) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }
}
```
matcher を使えば特定のパスや複数のパスで middleware を実行することができます。
```tsx
// /about と /about/* にアクセスした場合に middleware を実行する
export const config = {
  matcher: "/about/:path*"
}

// /about, /about/* と /blog, /blog/* にアクセスした場合に middleware を実行する
export const config = {
  matcher: ["/about/:path*", "/blog/:path*"]
}
```
