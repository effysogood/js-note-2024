// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// ECMAScript 2018, 최신 구문 (w/Babel)

const { update } = require('tar');

function add(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums);
}
sum(1, 2, 3, 9, 6, 34, 3);

// Array Concat
const fruits1 = ['🍉', '🍓'];
const fruits2 = ['🍐', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2];
console.log(arr);

// Object
const effy = { name: 'EFFY', age: 20, home: { address: 'home' } };
const updated = {
    ...effy,
    job: 's/w engineer',
};
console.log(effy);
console.log(updated);
console.log(updated.home); // Shallow Copied
