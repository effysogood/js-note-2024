/** Iterable 하다는 건! 순회가 가능하다는 것
 * Interable Protocol(규격 사항)을 따르고 있음
 * --> [Symbol.iterator](): Iterator;
 * 심볼 정의를 가진 객체나 특정한 함수가 Iterator를 리턴한다는 것은
 * 순회 가능한 객체이다 라는 것을 알 수 있음
 * 순회가 가능하면 무엇을 할 수 있나?
 * 순회하는 연산자 사용 가능 : for ... of, spread
 */

// for ... of
const array = [1, 2, 3];

for (const item of array) {
    console.log(item); // value 반환
}
for (const item of array.keys()) {
    console.log(item); // key 반환
}

// for ... in : key 값을 출력
// Iterator 규격을 따르지 않는 일반 객체의 경우
// 규격 사항을 따르지 않는 일반 객체라면 에러가 발생할 수 있음
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
    console.log(item);
}

// 수동적으로 사용하는 방법 (Not Clean Ver)
const iterator = array.values();
console.log(iterator.next().value); // 반환된 iterator로 수동 next 호출, 다음값 반환
console.log(iterator.next().value); // next의 value로 값에 접근 가능, 수동으로 하나씩 확인
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // undefined
console.log(iterator.next().done); // true 반복 종료

// Simple way using while
const iterator2 = array.values();
while (true) {
    const item = iterator2.next();
    if (item.done) break;
    console.log(item.value);
}
