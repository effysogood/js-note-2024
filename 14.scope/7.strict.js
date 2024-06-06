// 'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용 시 기본적으로 엄격 모드 적용!

// 기존에는 무시되던 에러들을 throwing 해줌
// 때로는 비엄격모드보다 빠르게 작동

// var 선언
var x = 1;

// delete 키워드 사용
delete x;

function add(x) {
    var a = 2;
    b = a + x; // 선언되지 않는 변수 사용 시
    console.log(this); // this 사용
}
add(1);

const array = [1, 2, 3];
for (num of array) {
    // num이 var로 선언된 것처럼 작동
    console.log(num);
}
