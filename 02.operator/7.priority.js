// 연산자 우선 순위
let a = 2;
let b = 3;
let results = a + b * 4; // 14

results = (a + b) * 4; // 20, 괄호로 우선 순위 설정
console.log(results);

// results = a++ + b * 4;
// console.log(results); // 14

results = ++a + b * 4;
console.log(results); // 14
