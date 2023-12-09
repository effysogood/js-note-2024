// 객체 Object (복합데이터) -> { key : value }
// 서로 연관 있는 속성(데이터, 프로퍼티)과 행동(상태, 메소드)를 묶어 주기 위해

/**
 * 1. Object Literal {key : value}
 * 2. new Object()
 * 3. Object.create()
 * -- key : 문자, 숫자, 문자열, 심볼 (데이터에 접근할 때)
 * -- value :  원시값, 객체 (함수)
 */

let apple = {
    name: 'apple',
    'hello-bye': '✋',
    ['hello-bye-1']: '✋',
    0: 1,
};

// 속성, 데이터 접근
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple); // emoji 항목 삭제됨

// -------------------

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

const myCar2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
};
