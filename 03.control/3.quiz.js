// Quiz!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록

// requirement :
// 1. using 'if condition statement'
// 2. using 'ternary statement'

// 01. if
if (num % 2 === 0) {
    console.log('👍');
} else {
    console.log('👎');
}

// 02. Ternary
let evenNum = num % 2 === 0 ? '👍' : '👎';
console.log(evenNum);
