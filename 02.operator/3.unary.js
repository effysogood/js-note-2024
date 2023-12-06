// 단항 연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5

console.log(a); // -5
console.log(-a); // 5

a = +a;
console.log(a); // 5

a = -a; // => -5
a = +a; // => +(-5)
console.log(a); // -5

// 부정 연산자
let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

// !! : 값을 boolean으로 변환
console.log(!!1); // ! 부정연산자를 두번 부정 시, 원래의 boolean 값이 나오게 됨

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
