// QUIZ 01: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
    const replaced = Array.from(array);
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}
const array1 = ['🍌', '🍓', '🍇', '🍓'];
const replacedResult = replace(array1, '🍓', '🥝');
console.log(replacedResult);

// QUIZ 02:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// outpit: 2

function count(array, item) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            counter++;
        }
    }
    return counter;
}
const array2 = ['🍌', '🥝', '🍇', '🥝'];
const countResult = count(array2, '🥝');
console.log(countResult);

// QUIZ 03: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환 (중복되는 공통된 아이템만)
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input, search) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (search.includes(input[i])) {
            result.push(input[i]);
        }
    }
    return result;
}
const arr3 = ['🍌', '🥝', '🍇'];
const arr4 = ['🍌', '🍓', '🍇', '🍓'];
const matchResult = match(arr3, arr4);
console.log(matchResult);
