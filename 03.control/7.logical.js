// 논리연산자 Logical Operator

// && 그리고 AND : 모든 조건이 충족
// || 또는 OR : 하나의 조건만 충족
// ! 부정 (단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용 버전)

let num = 8;
if (num >= 0 || num < 9) {
    console.log('👍');
}

if (num != 10) {
    console.log('🐳');
}

console.log(true && true); // true
console.log(false && false); // false
console.log(true && false); // false

console.log(true || true); // true
console.log(false || false); // false
console.log(true || false); // true

console.log(!'text'); // 문자열은 true, true를 부정하면 false가 출력.
console.log(!!'text'); // 문자열을 boolean으로 변환하게 됨.
