const fruits = ['🍐', '🍒', '🍑', '🥭'];

// 배열 아이템을 참조하는 방법
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

// 모든 아이템 순서대로 출력
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 💩💩 추가, 삭제 (좋지 않은 방식) 💩💩
// 01. index의 위치로 수동 접근하는 방법
fruits[8] = '🥝'; // empty items 생김
fruits[fruits.length] = '🍉'; // 마지막에 생기지만 역시나 좋지 않음
console.log(fruits);

// 02. delete 키워드로 삭제하는 방법
delete fruits[1];
console.log(fruits);
