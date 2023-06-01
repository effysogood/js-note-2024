const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y };
// => key와 value의 이름이 같다면 생략 가능
console.log(coordinate);

function makeObj(name, age) {
    return {
        name, // name: name,
        age, // age: age,
    };
}
