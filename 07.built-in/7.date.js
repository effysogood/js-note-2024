// Date 날짜 관련 함수들
// static은 class 이름만을 활용해서 만들 수 있는것, instance methods는 객체를 생성해 접근 가능

// UTC기준 (협정 세계 시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재 시간 설정
console.log(new Date('Jun 5, 2023'));
console.log(new Date('2023-08-01T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2023-08-01T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(2); // 0: 1
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0 일요일부터, 1...6: 토요일
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString()); // ISON 8501
console.log(now.toLocaleString('en-US'));
