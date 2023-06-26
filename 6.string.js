// String 문자열 함수들

const textObj = new String('Hello World!');
const text = 'Hello World';
console.log(textObj);
console.log(text);
console.log(text.length); // 문자열의 길이

console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(1));
console.log(text.charAt(4));

console.log(text.indexOf('l')); // 특정 문자열 위치 순서
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx')); // false
console.log(text.includes('rl')); // true
console.log(text.includes('H')); // 대소문자 구분

// 해당 문자로 시작,종료하는지 여부
console.log(text.startsWith('He'));
console.log(text.endsWith('He')); // false

// 대,소문자로 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 문자열 자르기
console.log(text.substring(0, 2)); // He

// 문자열 삭제
console.log(text.slice(2)); // llo World
console.log(text.slice(-2)); // 뒤에서부터 잘라내기 가능

// 공백 제거
const space = '         space         ';
console.log(space.trim());

// 문자열 쪼개기 (array로 반환)
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
// 문자열.split('구분자', 분할횟수)
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]

// 콤마(,) 단위로 쪼개기
const longText2 = 'Get to the, point';
console.log(longText.split(',', 2)); // [ 'Get', 'to' ]
