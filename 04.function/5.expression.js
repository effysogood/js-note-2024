// 01. 함수 선언문 function name( ) { }

// 02. 함수 표현식 const name = function ()  { }
// ► 값으로 평가될 수 있는 것이 표현식 expression!
// ► 값으로 할당할 수 있는 표현식!

let add = function (a, b) {
  return a + b;
  // 무명 함수, 이름이 없는
  // 함수 이름을 사용하더라도, add로만 호출 가능
  // 표현식은 함수 이름으로 외부에서 접근 불가이기 때문에 굳이 이름을 작성하지 않음
};
console.log(add(1, 2));

// 03. 화살표 함수 const name = () => { }

// 03-1. simple version 바로 값으로 할당할 수 있는 표현식 작성 가능
add = (a, b) => a + b; // 반환되는 인자 값이 동일할 경우

add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

// 04. 생성자 함수 const object = new Function(); *뒤 객체편에서 다룸

// 05. IIFE (Immediately-Invoked Function Expressions)
// 괄호로 묶어서 바로 호출하는 방식
// 즉각적으로 호출하는 표현식
// 많이 사용되어지는 표현식은 아님
(function run() {
  console.log("🏃‍♀️");
})();
