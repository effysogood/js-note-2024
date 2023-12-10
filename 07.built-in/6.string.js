// String 문자열 함수들

const textObj = new String('Hello World');
const text = 'Hello World';
console.log(text);
console.log(textObj);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(1));
console.log(text.charAt(2));

// 특정 문자열의 위치 순서 반환
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

// 해당 문자열 포함하는지 여부
console.log(text.includes('txt')); // false
console.log(text.includes('llo')); // true
console.log(text.includes('H')); // true

// 해당 문자로 시작, 종료하는지 여부
console.log(text.startsWith('He')); // true
console.log(text.endsWith('!')); // false

// 대소문자 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 문자열 자르기
console.log(text.substring(0, 2)); // 'He'

// 문자열 삭제
console.log(text.slice(3)); // 'lo World'
console.log(text.slice(-3)); // 'rld'

// 공백 제거
const space = '     space      ';
console.log(space.trim());

// 문자열 쪼개기 (array로 반환)
// string.split('구분자', 분할횟수)
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
console.log(longText.split(', '));
