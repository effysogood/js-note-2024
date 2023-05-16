// Boolean Type
const 참 = true;
const 거짓 = false;
// console.log(true);
// console.log(false);

// Use Cases :
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

// Falshy 거짓인 값
console.log(!!0); //false
console.log(!!-0); //false
console.log(!!''); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!NaN); //false

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
