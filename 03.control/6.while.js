// while(condition){
//  ..statement..
// }
// 조건이 false가 될때까지 { } 코드를 반복 실행
// while은 조건이 맞을 때, 코드 실행

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

// while
// 조건이 맞을 경우에만 출력.
let isActive = true;
let i = 0;
// while (isActive) {
//     if (i === 10) {
//         console.log(`I'm still alive`);
//     }
//     i++;
// }

// do .. while
// 조건이 false 더라도 꼭 무조건 한번은 실행!
do {
    console.log('do-while 아직 살아 있다!');
} while (isActive);
