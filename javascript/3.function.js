// Function
// - fundmental building block in the program, 프로그램을 구성하는 블럭.
// - subprogram can be used multiple times, 여러번 재사용 + 각각의 작은 단위로 수행.
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb : 동작하는 것이기 때문에.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello World");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello");

// 2. Parameters
// primitive(원시, 원초적인) parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const effy = { name: "effy" };
changeName(effy);
console.log(effy);

// 3. Default Patameters (added in ES6)
// 값이 지정되지 않아 있을 경우, 대체 되어 출력.
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest Parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("effy", "chang", "lemon");

// 5. Local Scope
// 밖에서만 안이 보이지 않고 접근 불가
// 안에서만 밖을 볼 수 있다
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "child message";
  }
  //   console.log(childMessage); // <--- error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// Bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}
// Good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않은 경우, 빠르게 Return.
  }
  // long upgrade logic ...
}

// Frist-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function Expression
// a function declaration can be called eariler than it is defined. (*Hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  //<---annonymous function
  console.log("print");
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expressiom
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// annonymous function
const printYes = function () {
  console.log("YES!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("NO!");
};
randomQuiz("love you", printYes, printNo); //YES!
randomQuiz("wrong", printYes, printNo);

// Arrow function
// ** always annonymous
const simplePrint = function () {
  console.log("simplePrint");
};

const simplePrintA = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  // block 사용 시, return 사용.
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
