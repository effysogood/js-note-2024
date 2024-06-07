/* Clousres 클로저
A closure is the combination of a function bundled together
(enclosed) with references to its surrounding state (the lexical environment)
In other words, a closure gives you access to an outer function's scope from an inner function

클로저는 함수와 함수를 감싸고 있는 환경 조합, 함수 묶음과 그 주변 상태(렉시컬 환경)에 대한 참조를 결합한 것
즉, 클로저를 사용하면 내부 함수에서 외부 함수의 (상태) 범위에 액세스 가능
*/

const text = 'hello';
function func() {
    console.log(text); // 내부에서 외부로의 접근 ✅
}
func();

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`); // 내부에서 외부로의 접근 ✅
    }
    // inner(); // 1. 호출
    return inner; // 2. 참조값으로 return
    // --> inner가 반환될 때, inner뿐 아니라 함수 외부에 있는
    // outer의 렉시컬 환경이 함께 묶여서 클로저로 반환되기 때문에 동일한 값 출력.
    // inner의 렉시컬 환경은 외부 렉시컬 환경 참조에 의해 outer 렉시컬 환경이 연결
}
const outInner = outer();
outInner();

// 함수가 중첩되어 있을 때, 내부 함수가 외부 함수의 렉시컬 환경에 접근할 수 있으니까
// 외부 환경에도 접근이 가능! 클로저 🐝
