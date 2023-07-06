// Map [keys, values] 배열
// 유일한 키, 순서 X
// 키만 다르다면 중복 가능, 키+값, 값은 중복이 가능, 순서 상관없음

// map은 무조건 key를 이용해서 찾고, 삭제하고, 할당 가능
// key가 고유한 ID이기 때문

const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌'],
]); // 배열 안에 또다른 배열
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
    [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get[key]);
