// Map
// [keys, values]
// 유일한 키 🔑
// key만 다르다면 value 중복 가능 + 순서 ❌

// map은 무조건 key 🔑 를 이용해서 데이터를 찾고, 삭제하고, 할당
// key가 고유한 ID 이기 때문 (중복 ❌)

const map = new Map([
    ['key1', '🍎'],
    ['key2', '🥭'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재 여부 : key 값으로 확인
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key6')); // undefined

// 추가
map.set('key3', '🍐');
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

// 1. 구조상으로는 유사하지만, 사용할 수 있는 함수가 다름
const map2 = new Map([[key, milk]]);
console.log(map2);

// 2. 오브젝트에서는 key를 사용해 동적으로 접근 가능
//    map에서는 .get 메서드를 사용해 접근
console.log(obj[key]);
console.log(map2[key]); // undefined
console.log(map2.get(key));
