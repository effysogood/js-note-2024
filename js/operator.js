// 1. String concatenation(연쇄)
console.log('my' + ' cat');
console.log('1' + 2); // 12
console.log(`string literals: 1+2 = ${1 + 2}`);
console.log("effy's book"); // 따옴표가 중복될때

// Escape Sequence : 문자열에서 표현하기 어려운 문자를 백슬래쉬(\)를 통해 표현
// '\n' : 줄바꿈(Enter)
// '\t' : 탭(tab)
// '\' : backspace

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators (++ 증가/ -- 감소)
let iCounter = 2;
const preIncrement = ++iCounter;
// 먼저 피연산자의 값을 1 증가시킨 후에 해당 연산을 진행함.
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${iCounter}`);
const postIncrement = iCounter++;
//먼저 해당 연산을 수행하고 나서, 피연산자의 값을 1 증가시킴.
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${iCounter}`);
let dCounter = 2;
const preDecrement = --dCounter;
console.log(`postIncrement: ${preDecrement}, counter: ${dCounter}`);
const postDecrement = dCounter--; //할당 후, 업데이트
console.log(`postIncrement: ${postDecrement}, counter: ${dCounter}`);

// 4. Assingment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //true

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); //false

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

// [TIP] Heavy Operation 일수록 뒤에 작성하기
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😅');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// '==' loose eqaulity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// '===' strict eqaulity, with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object eqaulity by reference
const effy1 = { name: 'effy' };
const effy2 = { name: 'effy' };
const effy3 = effy1;
console.log(effy1 == effy2); //false
console.log(effy1 === effy2); //false
console.log(effy1 === effy3); //true

// equality = puzzler
console.log(0 == false);
console.log(0 === false); // false with type strict equality
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const guest = 'coder';
if (guest === 'effy') {
    console.log('Welcome, effy');
} else if (guest === 'coder') {
    console.log('You are a amazing coder!');
} else {
    console.log(unknown);
}

// 9. Ternary(삼항, 3개) operator: ?
// condition ? value1 : value2;
console.log(guest === 'effy' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum(열거형)-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('Go Away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('Love you');
        break;
    default:
        console.log('Love you');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// > 블럭을 먼저 실행 후  조건이 맞는지 안 맞는지 확인
let j = 0;
do {
    console.log(`do while: ${i}`);
    j--;
} while (j > 0); // 무조건 조건 한번 실행.

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nestend loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1 : ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let j = 0; j <= 10; j++) {
    if (j > 8) {
        break;
    }
    console.log(`q2 : ${j}`);
}
