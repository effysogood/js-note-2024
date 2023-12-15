// Generator
// 생성기 : 값을 생성할 수 있는
// 직접 구현할 일은 거의 없음

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2;
        }
    } catch {
        console.log(error);
    }
}
// 사용자가 원하는 때까지 기다렸다가 호출 시, 하나씩 리턴
// 사용자에게 양도권을 제어

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// return()
// multiple.return();
// --> 끝냄

// throw()
// multiple.throw('Error!');
// --> 내부로 error를 던질 수도 있음 (try, catch)

next = multiple.next();
console.log(next.value, next.done);
