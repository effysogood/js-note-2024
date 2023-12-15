// Set
// 집합체, 순서 ❌, 중복 불가 ❌
// 중복된 아이템이 있다면 추가 되지 않음
const set = new Set([1, 2, 3]);
console.log(set);

// .size 사이즈 확인
console.log(set.size); // 3

// .has 존재 여부
console.log(set.has(1)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

// .add 추가
set.add(6);
console.log(set);
set.add(6); // ❌ 중복 불가 ❌
console.log(set);

// .delete 삭제
set.delete(6); // 단일 삭제
console.log(set);

// .clear 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// QUIZ 01
obj1.price = 10;
objs.add(obj1);
console.log(objs);
// Shallow Copied
// 참조 값으로 전달되었으므로 값이 변경되어 업데이트
// 오브젝트의 가격은 변경, 동일한 오브젝트 주소를 지님

// QUIZ 02
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs); // obj3 값이 업데이트 되어짐
