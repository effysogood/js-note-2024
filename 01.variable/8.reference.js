// Value and Reference
// 값과 참조

// 원시 타입은 값(Value)이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체 타입은 참조값(메모리 주소, Reference)가 복사되어 전달됨
let apple = {
    name: '사과',
};
let orange = apple; // 0x1234 -> 메모리의 주소값이 복사되어 저장
orange.name = '오렌지';
console.log(apple);
console.log(orange); // 동일한 객체 값으로 저장됨.

// 원시 타입은 값 자체가 메모리에 저장.
// 객체 타입은 메모리 주소(참조값)이 메모리에 저장.
// 값을 할당하거나 매개 변수로 값을 전달할 때, value vs reference
