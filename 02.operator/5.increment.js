// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a -1;
console.log(a);

console.clear();

// 🌻 Warning!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함 (*출력 후 연산)

let number = 10;
let x = number++;
let y = ++number;

console.log(x);
// 10을 출력한 다음에 +1을 한다. 출력 값은 10
// 출력 후에 +1을 하므로 현재 number(변수)값은 11이 됨.

console.log(y);
// 현재 number의 값은 11
// 11에 +1을 더한 후 출력한다.
// 출력 전에 +1을 하므로, 출력 값은 12. 현재 num(변수) 값도 12

// 🐞 Practice More
let l = 5;
let m = l-- + 2 + --l;
console.log(l); // l은 현재 값이 3.
console.log(m); // 4+2+4 출력 값이 10.

let o = 2;
let p = o++;
console.log(p);
