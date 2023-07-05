// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🍎', '🍐', '🍋', '🍌'];
const [first, second, ...others] = fruits;
// --> 구조 분해되어서 각각 이름이 할당됨
console.log(fruits[0]);
//--------------------
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z); // 기본값 0이 출력됨

function createEmoji() {
    return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const effy = { name: 'effy', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}
console.log(effy);

const { name, age, job: occupation, pet = '강아지' } = effy;
console.log(name);
console.log(age);
console.log(occupation);
// console.log(job);
console.log(pet);
