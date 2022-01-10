// express を app として利用可能にする
var express = require("express");
var app = express();
// ポート 3000 番で待ち受け
var server = app.listen(3000, function () {
  console.log("start http://localhost:3000");
});

app.get("/", function (req, res, next) {
  res.send("こんにちは");
});

app.get("/test", function (req, res, next) {
  res.send("テスト");
});

// 名前リスト
var nameList = [
  {
    id: "1",
    name: "山田",
    address: "東京都",
  },
  {
    id: "2",
    name: "鈴木",
    address: "千葉県",
  },
];

// 名前リストを取得する API
app.get("/api/names/list", function (req, res, next) {
  res.json(nameList);
});

// 名前リストを個別取得
app.get("/api/names/:nameId", function (req, res, next) {
  var name;
  for (i = 0; i < nameList.length; i++) {
    if (nameList[i].id === req.params.nameId) {
      name = nameList[i];
      break;
    }
  }
  res.json(name);
});

// view engine に ejs を指定する
app.set("view engine", "ejs");
// /hello ねほリクエストで hello.ejs を表示
app.get("/hello", function (req, res, next) {
  res.render("hello", { name: "田中" });
});
