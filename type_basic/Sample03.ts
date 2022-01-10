// 名前と1つの値（文字列や数値）を
// 持つ属性知保持クラス
class ItemAttr<T> {
  name: string;
  attr: T;
  constructor(name: string, attr: T) {
    this.name = name;
    this.attr = attr;
  }
  getAttribute(): T {
    return this.attr;
  }
}

var attr1 = new ItemAttr<string>("氏名", "田中");
var attr2 = new ItemAttr<number>("年齢", 25);
var age: number = attr2.getAttribute();
