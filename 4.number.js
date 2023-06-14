// Number
const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // e+308 = 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
    // expression
}
if (num1 === Number.MAX_VALUE) {
    // expression
}
if (Number.isNaN(num1)) {
    // expression
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2 = 1.02 x 10[2]

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // '1234'

console.log(num4.toString()); // '1234.12'
console.log(num4.toLocaleString('ar-EG')); //٣٤٫١٢ aribic

// 원하는 자릿수까지 유효하도록 반올림 (문자열로 변환)
console.log(num4.toPrecision(5)); // '1234.1'
console.log(num4.toPrecision(4)); // '1234'
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수 표기법, 1.2e+3

console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}
