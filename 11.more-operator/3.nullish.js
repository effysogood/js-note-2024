// Nullish Coalescing Operator : null 병합 연산자
// ES11 (ECMAScript 2020)
// || (OR) : falshy한 경우 설정 (할당) 0, -0, '', undefined, null
// ?? null, undefined인 경우에만 할당

// ||는 첫 번째 truthy 값을 반환
// ??는 첫 번째 정의된(defined) 값을 반환
// null과 undefined, 숫자 0을 구분 지어 다뤄야 할때 이 차이점은 매우 중요한 역할을 함!

let num = 0;
console.log(num || '-1');
// 0이 falsy한 값으로 평가되어 -1이 출력됨, 0을 출력하고 싶다면?

// let num;
console.log(num ?? '-1');
// 아무런 값이 없을 때, -1이 출력됨

let nullish = a ?? b;
// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b
