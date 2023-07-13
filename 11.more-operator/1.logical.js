// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축 평가 : short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐥', owner: 'effy' };

if (obj1 && obj2) {
    console.log('둘 다 TRUE!');
}

if (obj1 || obj2) {
    console.log('하나만 TRUE!');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2; // 둘 다 true,
console.log(result); // 앞에 것이 먼저 출력 *단축 평가

// 활용 예제
// && 조건이 truthy일때, 무언가를 해야 할 경우
// || 조건이 falshy일때, 무언가를 해야 할 경우

function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error(`It hasn't owner`);
    }
    animal.owner = '바뀐 주인';
}

function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('It has owner');
    }
    animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price; // null일 수 있는 아이템, crash 방지
console.log(price); // undefined

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falsy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message = 'Hi') {
    const text = message || 'Hello';
    console.log(text);
}
print();
print(undefined); // -- undefined라고 명시해도 default값이 출력됨
// 0
print(null);
print(0);
