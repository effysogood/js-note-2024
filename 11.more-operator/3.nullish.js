// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// || falshy한 경우 설정 (할당) : 0, -0, ''
// ?? null, undefined

let num = 0;
console.log(num || '-1'); // num이 초기값이 됨
console.log(num ?? '-1');

let nullish = a ?? b;
// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b
