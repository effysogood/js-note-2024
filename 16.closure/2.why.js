// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 은닉화
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!

function makeCounter() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    /* --- private field --- */
    return {
        increment: () => changeBy(1),
        decrement: () => changeBy(-1),
        value: () => privateCounter,
    };
}

// 외부에서는 public 함수만을 통해서 조작 가능.
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
