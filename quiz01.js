// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter01 {
    #value;
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }
    increment = () => {
        this.#value++;
    };

    get value() {
        return this.#value;
    }
}
const counter01 = new Counter01(-2);
counter01.increment(); // 1
counter01.increment(); // 2
console.log(counter01.value);

const counter01 = new Counter01(0);
counter01.increment();
console.log(counter01.value);

class Counter02 {
    #count;
    constructor(count) {
        this.#count = count < 0 ? 0 : count;
    }
    get value() {
        return this.#count;
    }
    increment = () => {
        this.#count += 1;
    };
    descrement = () => {
        this.#count -= 1;
    };
}
const counter02 = new Counter02(-5);
counter02.increment();
console.log(counter02.value);
