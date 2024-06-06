// 동결! Object.freeze() : 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// 객체를 동결하여 객체의 속성을 추가, 삭제, 쓰기 등을 방지!
// 다만, 이것은 얕은(shallow) 동결이어서 객체 내에 참조하는 다른 객체는 여전히 수정 가능
const effy = { name: 'effy' };
const dog = { name: 'bow', emoji: '🐶', owner: effy };

Object.freeze(dog);
dog.name = 'wow';
console.log(dog); // 변경 안됨

dog.age = 4;
console.log(dog); // 추가 안됨

delete dog.name;
console.log(dog); // 삭제 안됨

effy.name = 'effy choi';
console.log(dog); // 참조한 객체의 속성 변경 가능

// 밀봉! Object.seal : 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
// 객체의 속성을 추가하거나 삭제할 수 없도록 봉인하지만, 기존 속성은 수정 가능!
const cat = { ...dog };
// Object.assign(cat, dog);
// dog의 상태와 독립된 새로운 객체, 생성된 시점에는 동결되지 않은 상태! 동결 상태는 원본 객체에만 영향
Object.seal(cat);
console.log(cat);
cat.name = 'meow';
console.log(cat);
cat.name = 'meowwww';
console.log(cat);

// 동결 및 봉인 여부 확인 함수
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 (preventExtensions) : 추가 ❌
const lion = { name: 'roar' };
Object.preventExtensions(lion);
lion.name = 'roooar';
console.log(lion);
delete lion.name;
console.log(lion);
lion.name = 'rooooooar';
console.log(lion);
