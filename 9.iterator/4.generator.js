// generator 값을 생성할 수 있는
// 직접 구현할 일은 거의 없음

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2;
            // 사용자가 원하는 때까지 기다렸다가 호출 시, 하나씩 리턴
            // 사용자에게 양도권을 제어
        }
    } catch (error) {
        console.log('error!');
    }
}

const multiple = multipleGenerator();

// multiple.return(); // 끝냄
multiple.throw('Error!'); // 내부로 error를 던질 수도 있음

let next = multiple.next();
console.log(next.value, next.done);
