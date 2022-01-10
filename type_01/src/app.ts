import { Person } from './person';
var elem = document.getElementById('content');
var person = new Person(1, '田中', '東京都');
person.write(elem);
person = new Person(1, '鈴木', '千葉県');
person.write(elem);
person = new Person(1, '山田', '埼玉県');
person.write(elem);
