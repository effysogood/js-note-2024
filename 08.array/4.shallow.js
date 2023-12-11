// 얕은 복사 Shallow Copy : 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 얕은 복사가 이루어짐!
// 오브젝트의 값을 다른 곳에서 수정 시, 오브젝트를 가지고 있는 모든 배열에 수정사항이 반영 됨
// Array.from, concat, slice, spread(...), Object.assign

// 아무리 많은 오브젝트가 중첩이 되어 있어도, 메모리 주소 값이 전달 및 복사되는 것
const pizza = { name: '🍕', price: 2, owner: { name: 'effy' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
