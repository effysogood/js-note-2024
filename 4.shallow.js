// Shallow Copy 얕은 복사 : 오브젝트는 메모리 주소 전달 (*레퍼런스)
// -- 오브젝트를 다른 곳에서 수정하면 오브젝트를 가지고 있는 모든 배열에 수정 사항이 반영됨
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Obejct.assign

const pizza = { name: '🍕', price: 2, owner: { name: 'effy' } };
// 아무리 많은 오브젝트가 중첩이 되어있어도 전달,복사 할때 메모리 주소가 복사됨
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1 :', store1);
console.log('store2 :', store2);

store2.push(sushi);
console.log('store1 :', store1);
console.log('store2 :', store2);

pizza.price = 4; // 키워드도 메모리의 주소값을 가지게 됨
console.log('store1 :', store1);
console.log('store2 :', store2);
