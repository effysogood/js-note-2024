// Parameter
// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 'arguments 객체'에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1 / 외부에서 값이 주어진다면 해당 값이 인자에 할당

function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
}
add(4, 8);

// Rest 매개변수 Rest Parameters
// Rest parameter must be last formal parameter 마지막에만 위치!

function test(a, b, ...thArgs) {
    console.log(a, b);
    console.log(thArgs);
}
test(1, 2, 3, 4, 5, 6);
// Rest Parameters는 말 그대로 Rest의 역할을 하는 함수 파라미터
// 함수의 파라미터에 쓰여서 뒤에 남는 요소들을 배열로 받아줌.

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
// Expected output : 6
