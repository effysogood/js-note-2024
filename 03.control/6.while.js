// while(condition){
//  ..statement..
// }
// 조건이 false가 될때까지 { } 코드를 반복 실행
// while은 조건이 맞을때, 코드 실행

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while (isActive) {
    console.log('아직 살아있다.');
    if (i === 3) {
        break;
    }
    i++;
}
// while은 조건이 false일 경우 조건 실행하지 않음.

// 꼭 한번은 무조건 실행.
// do! 해 하고 그 다음에 조건을 검사.
do {
    console.log('do-while 아직 살아있다.');
    // 조건이 false여도 한번은 실행
} while (isActive);
