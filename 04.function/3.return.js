// return 반환
// return을 명시적으로 하지 않으면, 자동으로 undefined이 반환됨!

function add(a, b) {
    return a + b;
}
const result = add(1, 2);
console.log(result);

// ⭐️ return을 함수 중간에 하게 되면 함수가 종료됨
// ⭐️ 사용 예: 조건이 맞지 않는 경우, 함수 도입부에서 함수를 일찍이 종료함 (무거운 코드 실행하기 이전)

function print(num) {
    if (num < 0) {
        return; // return undefined를 반환하는 것과 동일.
    }
    console.log(num);
}

print(10);
print(-10);
