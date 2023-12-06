// 조건문 Conditional Statement
// switch
// ㄴ if else if else if else ... else
// 정해진 범위 안에 값에 대해 특정한 일을 해야 하는 경우
// 프로그램이 표현식을 평가한 후, 그 값과 case 레이블의 값을 비교해 일치하는 명령문 실행

let day = 5;
let dayName;

switch (day) {
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default:
        console.log('해당 하는 요일이 없음');
}
console.log(dayName);

let condition = 'bad'; // okay, good -> 좋음!, bad -> 나쁨!
let text;

switch (condition) {
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
    case 'bad':
        text = '나쁨!';
        break;
}
console.log(text);

const fruit = 'Bananas';
let noti = '';
switch (fruit) {
    case 'Bananas':
        noti = 'Bananas are $0.5 a dollar.';
        break;
    case 'Mangoes':
    case 'Papayas':
        noti = 'Mangoes and papayas are $2.5 a dollar.';
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}`);
}
console.log(noti);
