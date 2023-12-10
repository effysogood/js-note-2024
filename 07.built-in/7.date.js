// Date 날짜 관련 함수들

// UTC 기준 (협정 세계 시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Dec 10, 2023'));
console.log(new Date('2023-12-10T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2023-12-10T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(1);

console.log(now.getFullYear());
console.log(now.getMonth()); // 1
console.log(now.getDate()); // 0 : 1
console.log(now.getDay()); // 0 일요일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('ko-KR'));
console.log(now.toLocaleString('en-US'));
