// 카운터 만들기
// 받아온 숫자 유효성 검사 및 0으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
    #value;
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }

    increment = () => {
        this.#value++;
    };
}

const counter = new Counter(2);
counter.increment();
console.log(counter.value);
