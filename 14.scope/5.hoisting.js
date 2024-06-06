/* 호이스팅 Hoisting (끌어올리다)
    자바스크립트 엔진(번역기, intepreter)이 코드 실행 전,
    변수, 함수, 클래스의 선언문을 끌어 올리는 것을 의미
    => 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김 */

/* let vs const
    let : 재할당이 필수로 필요한 경우에만 사용!
    const : 가능한 const 사용하기 🐝 */

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출 가능!
print();
function print() {
    console.log('Hello');
}

// 변수(let, const)와 class는 선언만 호이스팅이 되고,
// 초기화는 안 됨!!!
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러 발생
console.log(hi); // ❌ crashed
const hi = 'hi';
const func1 = function () {}; // 마찬가지로 변수 내 선언

const cat = new Cat();
class Cat {}

let x = 1;
{
    console.log(x); // ❌ crashed, 블럭 내 x 존재하지만 초기화 되지 않음ㄴ
    let x = 2;
}
