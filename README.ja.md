# アコーン

Acornは、JavaScriptで書かれた高速で軽量なJSパーサーです。

## デモ
https://code4fukui.github.io/acorn-es/example.html

## 機能
- ES6+の構文をサポート
- コメントの解析
- トークンの取得
- Pluginシステム

## 必要環境
- ECMAScript 2015以降をサポート

## 使い方
```javascript
import { parseModule } from "https://code4fukui.github.io/acorn-es/parseModule.js";

console.log(parseModule("await func();"));
```

## ライセンス
MITライセンス