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

// 01 --> 배열 자체를 수정 (Update)
// 추가 1.제일 뒤
fruits.push('🍉');
console.log(fruits);

// 추가 2.제일 앞
fruits.unshift('🫐');
console.log(fruits);

// 제거 1.제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제거 2.제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
// splice(start: number, deleteCount?: number);
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '🍌', '🍉');
console.log(fruits);

// <----------------- 배열 자체를 수정, 업데이트 ENDS

// 02 --> 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log('Slice01 :', newArr);
newArr = fruits.slice(0);
console.log('Slice02 :', newArr);

// .concat()
// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2); // 그대로 동일
console.log(arr3); // 새로 생성

// .reverse()
// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// .flat()
// 중첩 배열을 하나의 배열로 쫙 펴기
let overlapArr = [
    [1, 2, 3],
    [4, [5, 6]],
];
console.log(overlapArr);
console.log(overlapArr.flat()); // Default) 1단계까지만 Flat 가능
console.log(overlapArr.flat(2)); // Option) 값을 지정해줄 수 있음

// .fill()
// 특정한 값으로 배열을 채우기
const arr5 = overlapArr.flat(2);
arr5.fill('0', 1, 3); // 배열 자체를 수정
console.log(arr5);

arr5.fill('a', 3);
console.log(arr5);

// .join()
// 배열을 문자열로 합하기
let text = arr5.join(); // 쉼표로 구분
console.log(text);
text = arr5.join(' | '); // 구분점 추가 가능
console.log(text);

// <----------------- 새로운 배열을 생성
