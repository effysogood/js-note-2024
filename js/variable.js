// Data Types

// 1. Use strict
// added in ECMAScript 5
// Javascript is very flexible
// use this for Vanila Javascript.
"use strict";

// 2. Variable, rw(read/write)
// * let (added in ES6)
// global & block Scope
let globalName = "It's global name";
{
  let name = "effy";
  console.log(name);
  name = "change the name";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// * var (don't ever use this!)
// var hoisting : move declaration from bottom to top
// --> hoisting은 어디에 선언했는지와 상관없이 제일 상단으로 선언을 끌어올려주는 것.
// has no block scope (block을 철저히 무시)
{
  age = 4;
  var age;
}
console.log(age); // block scope 무시.

// 3. Constant, r(read only)
// use 'const' whenever possible!
// only use 'let' if variable needs to change.
// 한번 선언(할당) 시, 값이 절대 바뀌지 않음.

// favor immutable data type always for a few reasons :
// - secutiry
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// * Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// 4. Variable types
// primitive (single items) : number, string, boolean, null, undefined,symbol
// object (box container)
// function (first-class function)
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count} , type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// Number - special numeric values: Infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1241341234123412341234n; //over(-2**53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`);

// String
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan; // string과 변수
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// template literals(string) : use backtick(`)
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Boolean
// false : 0, null, undefined, null, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언은 되어있지만, 값을 지정하지 않음.
let xx = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${xx}, type: ${typeof xx}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// > 두가지의 심볼은 다름. 동일한 string을 작성했어도 고유한 식별자로 생성.
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true

// object, real-life object, data structure
const effy = { name: "effy", age: "27" };
console.log(effy);
effy.name = "saeyoung";
console.log(effy); //name: 'saeyoung', age: '27'

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = "7" + 1;
console.log(`value: ${text}, type: ${typeof text}`); //string 71
text = "6" / "2";
console.log(`value: ${text}, type: ${typeof text}`); //number 3
console.log(text.charAt(0)); //error
