// Global Built-in

console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)'); // --> 문자이지만 JS로 평가해서 출력
console.log(isFinite(1)); // 숫자가 유한한지 확인, true
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 실수로 변환
console.log(parseInt('12.43')); // 정수로 변환
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수 문자는 이스케이프 처리 해야 한다.
const URL = 'https://에삐.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '에삐.com';
const encodedPart = encodeURIComponent(part);
console.log(encodedPart);
