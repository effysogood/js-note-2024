// 카운터 만들기
// 0 이상의 값으로 초기화 한뒤 하나씩 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
    DEFAULT_TIME_SET = 0;
    constructor(count) {
        this.count = count;
    }

    increaseNumber(count) {
        let i = count;
        for (i = 0; i <= count; i++) {
            console.log(i);
        }
    }
}

const counter = new Counter();
counter.increaseNumber(10);
