// Number 숫자 관련 함수들

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

// Static Properties, 클래스 레벨에서 접근 가능
console.log(Number.MAX_VALUE); // 정수에서 출력할 수 있는 가장 큰 수, e+308 = 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

/* --- 예시 --- */
if (num1 < Number.MAX_VALUE) {
    // syntax-01..
}
if (Number.isNaN(num1)) {
    // syntax-02..
}
/* ----------- */

// '지수' 표기법 (매우 크거나 작은 숫자를 표기할 때, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 반환
const num4 = 1234.82;
console.log(num4.toFixed()); // 실수 -> 정수
console.log(num4.toString()); // 숫자 -> 문자
console.log(num4.toLocaleString('ar-EG')); // 언어에 따른 숫자표기법 변환 (*Arab)

// 원하는 자릿수까지 유효하도록 반올림, 전체 자릿수 표기가 안 될때는 지수 표기법
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4)); //1235
console.log(num4.toPrecision(2));

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}
const num5 = 0.1 + 0.2 - 0.2; // exp) 0.1
console.log(num5); // 0.1000...3 (2진수 <-> 10진수)
// 미묘한 오차가 존재, 방지하기 위해 EPSILON 활용

function isEqual(original, expected) {
    return original === expected;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num5, 0.1)); // false

function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}
