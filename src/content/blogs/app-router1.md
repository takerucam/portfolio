---
layout: '../../layouts/MarkDownLayout.astro'
title: 'Next.jsのApp Routerを触ってみた1'
pubDate: '2023-06-6'
description: 'App Router と Layout の基礎についての紹介です'
author: 'muchimuchi'
# image:
#   url: ''
#   alt: 'デスク'
tags: ['Next.js', 'App Router']
---

# App Router とは

Next.js 13.4 で stable になった App Router（アップラウター） という機能があります。これまで Next.js では pages ディレクトリにファイルを置くことでルーティングを行っていましたが、App Router では pages ディレクトリにファイルを置かずにルーティングを行うことができます。具体的なルーティングの設定やその他の機能について本ブログで何回かに分けて紹介していきます。間違った解釈をしている箇所もあるかもしれないのでご注意ください。

# ルートの生成

App Router では `app` フォルダ直下に置くフォルダをルートとして扱います。そのためフォルダ名がそのまま URL として使えます。アクセスするためには各フォルダに `index.js` を定義捨必要があります。例えば以下のようなツリーを考えます。

```bash
app
├── index.js
├── about
│   └── index.js
└── blog
    └── index.js
```

上記ツリーでは `/` にアクセスすると `app/index.js` が表示され、`/about` にアクセスすると `app/about/index.js` が表示されます。`/blog` にアクセスすると `app/blog/index.js` が表示されます。

# Layout

以前の Next.js でもありましたが App Router にも `Layout.js` があります。`app` ディレクトリの直下には必ず `Layout.js` ですので注意です。

```js
export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

`meta` 情報ももちろん設定できます。

```js
import type { Metadata } from 'next'

export const metaData: Metadata = {
  title: 'App Router',
  description: 'App Routerの紹介',
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {
```

## Nested Layout

フォルダ内で `Layout.js` を定義することでネストした Layout を作ることができます。例えば以下のようなツリーを考えます。

```bash
app
├── index.js      # Layout1が適用
├── layout1.js
├── about
│   ├── index.js  # Layout1と
│   │             # Layout2が適用
│   └── Layout2.js
└── blog
    ├── index.js  # Layout1と
    │             # Layout3が適用
    └── Layout3.js
```

`/about` にアクセスすると `app/about/Layout.js` が表示されます。`/blog` にアクセスすると `app/blog/Layout.js` が表示されます。さらにすべてのページに共通する Layout として `app/layout.js` が表示されます。Route Group を使えばさらに複雑なネストも可能です。それについては別の機会に紹介します。

今回はここまでです。次回はリンクとナビゲーションとルートグループについて紹介します。
