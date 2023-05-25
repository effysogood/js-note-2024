// 함수 선언문 function name( ) { }
// 함수 표현식 const name = function ()  { }
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;
// 바로 값으로 할당할 수 있는 표현식 작성 가능

add = (a, b) => {
    return a + b;
};
console.log(add(3, 4));

// 생성자 함수 const object = new Function(); *뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
// 많이 사용되어지는 표현식은 아님
(function run() {
    console.log('🏃‍♀️');
})();
