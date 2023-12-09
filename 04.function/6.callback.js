/**
 * 일급 함수 first-class function
 * : 함수가 일반 객체처럼 모든 연산이 가능한 것
 * - 함수의 매개변수로 전달
 * - 함수의 반환값
 * - 할당 명령문
 * - 동일 비교 대상
 */

/**
 * 고차함수 Higher-order function
 * - 인자로 함수를 받거나 (콜백함수)
 * - 함수를 반환하는 함수를 고차함수
 * - 다른 함수를 매개 변수로 받거나 반환하는 함수
 */

// Callback Function 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 'action'은 콜백함수, 외부로부터 전달. 참조값(주소)을 전달 받는것!
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨.
// 언제 호출 되는지 모르며, 조건이 충족되지 않을 경우 영원히 호출되지 않을 수도 있음. 그래서 Call Back 함수

// ↗️ 함수(action)를 인자로 받는 '고차 함수 Higher Ordered Function'
// ↗️ 여기서 action은 Call Back 함수
function calculator(a, b, action) {
    if (a < 0 || b < 0) {
        return;
    }
    let result = action(a, b);
    console.log(result);
    return result;
}

calculator(1, 2, add); // <-- 참조값(주소)를 전달, call back
calculator(1, 2, multiply);
calculator(-1, -2, multiply); // 호출되지 않음 (0보다 작은 수로 조건 불충족)

function calc(a, b, action) {
    if (a < 5 || b < 5) {
        return;
    }
    let result = action(a, b);
    console.log(`calc : ${result}`);
    return result;
}
calc(1, 1, add);
