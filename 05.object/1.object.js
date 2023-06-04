// 01. Object Literal { key : value }
// 02. new Object()
// 03. Object.create();
// ‣ key - 문자, 숫자, 문자열, 심볼 : 데이터에 접근할 때
// ‣ value - 원시값, 객체 (함수) :

let apple = {
  name: "apple",
  "hello-bye": "✋",
  0: 1,
  ["bye-hello"]: "✋",
};

// 속성, 데이터에 접근하기 위한 방법
apple.name; // 마침표 표기법 dot notation
apple["bye-hello"]; // 대괄호 표기법 bracket notation

console.log(apple.name);
console.log(apple["bye-hello"]);

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
console.log(apple); // emoji는 삭제됨

// -------------------
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

const myCar2 = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
