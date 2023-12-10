// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 증가할 수 있는 카운터를 만들기
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
        return this.#value; // 접근 제어자로 private 필드 값을 불러옴, 읽기만 가능
    }
    increment = () => {
        this.#value++;
    };
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);

class Counter02 {
    #count;
    constructor(count) {
        this.#count = count < 0 ? 0 : count;
    }
    get value() {
        return this.#count;
    }
    increment = () => {
        this.#count++;
    };
    decrement = () => {
        this.#count--;
    };
}

const counter02 = new Counter02(-5);
counter02.increment();
console.log(counter02.value);
