const path = require("path");
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: "./src/app.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js", // [name]はentryで記述した名前（この例ではbundle）
  },
  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前
  // デフォルトは['.js', '.json']
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    // consentBase: path.join(__dirname, 'dist')
    static: path.join(__dirname, "dist"),
  },
  // モジュールに適用するルールの設定（ここではローダーの設定を行うことが多い）
  module: {
    rules: [
      {
        // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラ
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
