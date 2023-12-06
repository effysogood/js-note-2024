// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음 🔅
// !== 값과 타입이 둘 다 다름

console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); //true
console.log(2 === '2'); // 🔅 false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true

const obj1 = {
    name: 'js',
};
const obj2 = {
    name: 'js',
};
console.log(obj1 == obj2); // false <- 서로 다른 메모리 구조 가지고 있음
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true, 문자열 동일한 문자

const obj3 = obj2;
console.log(obj2 == obj3); // true
console.log(obj2 === obj3); // true, 동일한 메모리 값을 가지고 있으므로.
