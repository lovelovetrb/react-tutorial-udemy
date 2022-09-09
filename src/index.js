// Reactを使用する場合インポートする必要があるがJSXのみの使用の場合必要ない
import React from "react";
// HTMLにコンポーネントを反映させるためのライブラリ
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App/>, document.getElementById('root'))