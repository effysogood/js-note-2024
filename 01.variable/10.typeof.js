// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환

// dynamic, weakly typed programming language
// 어떤 값을 할당하느냐에 따라 타입이 달라진다!

let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 12345; // ⬅ 할당된 값에 따라 type이 결정됨
console.log(typeof variable); // number

variable = {}; //
console.log(typeof variable); // object

variable = function () {}; //
console.log(typeof variable); // function

variable = Symbol(); //
console.log(typeof variable); // symbol
