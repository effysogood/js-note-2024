// ⛳️ 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍐', '🍒', '🍑', '🥭'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍐'));

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍉')); // false

// --> 배열 자체를 수정 (Update)
// 추가 '제일 뒤'
let length = fruits.push('🍉');
console.log(fruits);
console.log(length);

// 추가 '제일 앞'
length = fruits.unshift('🫐');
console.log(fruits);
console.log(length);

// 제거 '제일 뒤'
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem); // 제거된 아이템이 할당됨

// 제거 '제일 앞'
let firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);

// 중간에 추가 또는 삭제
// splice(start: number, deleteCount?: number);
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '🥥');
console.log(fruits);

// <----------------- 배열 자체를 수정, 업데이트 ENDS
