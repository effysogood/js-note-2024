// let은 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 도는 변수
const effy = 'pretty';
// effy = 'gorgeous';
// --> TypeError: Assignment to constant variable

// 1. 상수
// 한번 정해지면 절대 이 값을 변경될 수 없음
const MAX_FRUITS = 5;
console.log(MAX_FRUITS);

// 2. 재할당 불가능한 상수변수 또는 변수
// Unreassignable
// Mutable
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
// apple = {};
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
