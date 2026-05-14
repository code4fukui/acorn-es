# acorn-es

[![Build Status](https://github.com/acornjs/acorn/workflows/ci/badge.svg)](https://github.com/acornjs/acorn/actions)
[![NPM version](https://img.shields.io/npm/v/acorn.svg)](https://www.npmjs.com/package/acorn)
[![CDNJS](https://img.shields.io/cdnjs/v/acorn.svg)](https://cdnjs.com/libraries/acorn)

完全にJavaScriptで書かれた、軽量で高速なJavaScriptパーサーです。

## コミュニティ

<a href="https://stand-with-ukraine.pp.ua/"><img src="https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct.svg" width="800"></a>

Acornは[MIT license](https://github.com/acornjs/acorn/blob/master/acorn/LICENSE)の下で公開されているオープンソースソフトウェアです。

[github](https://github.com/acornjs/acorn)でのバグ報告やプルリクエストの作成を歓迎します。質問や議論には、[Tern discussion forum](https://discuss.ternjs.net)をご利用ください。

## 使い方

```JavaScript
import { parseModule } from "https://code4fukui.github.io/acorn-es/parseModule.js";

console.log(parseModule("await func();"));
```

## パッケージ

このリポジトリには3つのパッケージが含まれています:

- [acorn](https://github.com/acornjs/acorn/tree/master/acorn/): メインパーサー
- [acorn-loose](https://github.com/acornjs/acorn/tree/master/acorn-loose/): エラー許容パーサー
- [acorn-walk](https://github.com/acornjs/acorn/tree/master/acorn-walk/): 構文ツリーウォーカー

リポジトリの内容をビルドするには `npm install` を実行してください。

```sh
git clone https://github.com/acornjs/acorn.git
cd acorn
npm install
```

## プラグイン開発

Acornは、妥当な範囲内でパーサーの動作を再定義できるプラグインをサポートするように設計されています。プラグインは（必要に応じて）新しいトークンタイプやトークナイザーコンテキストを追加し、パーサーオブジェクトのメソッドを拡張できます。これはクリーンでエレガントなAPIではありません。使用するにはAcornの内部構造を理解する必要があり、内部構造が大幅に変更されるたびにプラグインが壊れる可能性があります。それでも、この方法でAcorn全体をフォークすることなく、JavaScriptの方言用パーサーを作成することは_可能_です。また、原則としてそのようなプラグインを組み合わせることも可能です。たとえば、型を解析するプラグインとJSXスタイルのXMLリテラルを解析するプラグインがある場合、両方を読み込んでJSXタグと型の両方を含むコードを解析することができます。

プラグインは、パーサークラスを受け取り、拡張されたパーサークラスを返す関数です。プラグインは、単に `Parser` クラス（または別のプラグインによってすでに拡張されたバージョン）に適用することで使用できます。しかし、複数のプラグインを使用する場合、構文的に少し扱いにくくなるため、任意の数のプラグインを引数として静的メソッド `Parser.extend` を呼び出し、それらすべてのプラグインによって拡張された `Parser` クラスを作成することができます。JavaScriptエンジンのオプティマイザを不必要に混乱させるのを避けるため、通常はこのような拡張クラスを一度だけ作成し、それに対して繰り返し `parse` を呼び出すようにします。
