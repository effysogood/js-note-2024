/** Parameters (인자)
 * 매개 변수의 기본 값은 무조건 undefined
 * 매개 변수의 정보는 함수 내부에서 접근이 가능한 'arguments 객체'에 저장됨
 * 매개 변수 기본 값 : Default Parateters a = 1, b=1
 * 외부에서 인자 값이 주어진다면 외부에서 주어진 값이 할당
 * */

function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    // → 함수 객체 안의 property : 'arguments'
    // → 전달된 인자의 정보가 담겨져 있음
}
console.log(add(4, 8));

/**
 * Rest 매개 변수 (Rest Parameters)
 * : 마지막에만 위치
 * : Rest parameter must be last formal parameter
 */

function test(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
console.log(test(2, 4, 6, 7, 8, 8)); // 2, 4, [6,7,8,8]

function restParams(a = 1, b = 2, ...thArgs) {
    console.log(a, b);
    console.log(thArgs);
}
restParams();
// 기본 값(a, b)을 설정해줄 수도 있고, 인자의 값이 정해져 있지 않은 경우 배열로 받아오게 지정할 수 있음!
restParams(3, 4, 5, 6);
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
