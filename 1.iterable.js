// Iterable 하다는 건 순회가 가능하다는 것! *Iterable Protocol(규격 사항)을 가지고 있으면 됨
// [Symbol.interator](): Iterator; (next->next가 가능한)
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있음
// 순회가 가능하면 무엇을 할 수 있냐? 바로 빙글 빙글 도는 연산자 사용 가능
// for...of, spread

// FOR ... OF
const array = [1, 2, 3];
for (const item of array) {
    console.log(item);
}

// array의 methods (values, keys, enteries..)
const arrayMethod = [1, 2, 3];
for (const item of array.values()) {
    console.log(item);
}

// FOR ... IN
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
    // key를 출력
    console.log(item);
}
/* 규격 사항을 따르지 않는 일반 객체라면 에러가 발생할 수 있음
    // TypeError: obj is not iterable
프로토콜을 따라가지 않는 일반 객체는 for...of 연산자 사용 불가 (에러 발생)
대신, for in 이라는 연산자는 사용 가능 */

const iterator = array.values();
console.log(iterator.next().value); // 반환된 iterator로 수동 next 호출, 다음값 반환
console.log(iterator.next().value); // next의 value로 값에 접근 가능, 수동으로 하나씩 확인
console.log(iterator.next().value);
console.log(iterator.next().done); // true(4, 마지막)

while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
