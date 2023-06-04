/**
 * Function : 특정한 일을 수행하는 코드의 집합
 * - 유지 보수성
 * - 재사용 가능
 * - 높은 가독성
 */

// 함수 Function
// 중복되는 일이 있다면, 함수 단위로 '작은 단위의 일들'을 묶어서 작성
// '수행하는 일'을 잘 나타낼 수 있는 함수 이름을 지어야 겠군
// '매개 변수 이름(parameter)'도 의미있게 지어야 겠군

// Case01
function sum(a, b) {
  console.log("👍 function test 👍");
  return a + b;
}

const result = sum(1, 2);
console.log(result);

// Case02
let lastName = "김";
let firstName = "지수";
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

function printName(lastName, firstName) {
  return `${lastName} ${firstName} ✋`;
}
console.log(printName("Choi", "Saeyoung"));
