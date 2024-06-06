// 스코프 Scope (범위, 영역)
// : 변수를 참조(접근)할 수 있는 유효한 범위
// : 식별자가 유효한 범위, 선언된 위치에 따라 유효 범위가 결정됨

{
    ('블럭 안의 변수는 블럭 안에서만 유효'); // 이름 충돌 및 메모리 절약
    // 코드 블럭 : { }, if { }, for(){ }, function(){ }
}

// 블럭 외부에서는 블럭 내부의 변수를 참조 ❌
{
    const a = 'a';
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
    const message = 'Hello World';
    console.log(message);
}
console(message);

// 함수 외부에서는 함수의 매개 변수 참조 ❌
function sum(a, b) {
    return a + b;
}
