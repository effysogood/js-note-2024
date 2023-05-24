function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const sum = add;

console.log(add(1, 2));
console.log(sum(1, 2));
console.log(sum());
// ► undefined, undefined, NaN
// ► 필요한 인자를 전달해 주어야함.
