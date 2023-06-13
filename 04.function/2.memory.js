function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
// ► 함수의 이름에 메모리 주소가 할당(참조)

const sum = add; // 메모리 주소가 할당된것 (동일한 메모리 주소값)

console.log(add(1, 2));
console.log(sum(1, 2)); // ► 동일한 값이 출력되는 것을 볼 수 있음

console.log(sum()); // NaN
// ► undefined(인자), undefined(인자)
//   인자를 전달 해주지 않았을 경우, undefined로 출력됨
// ► 필요한 인자를 전달해 주어야함.
