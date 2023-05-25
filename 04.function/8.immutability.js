// Immutability 불변(성)

// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 ❌
// 상태 변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값)만들어서 반환해야 함 🔆
// 원시값 -> 값에 의한 복사
// 객체값 -> 참조에 의한 복사 (메모리 주소)

function display(num) {
    num = 5; // ❌ 내부에서 재할당 절대 불가!
    console.log(num); // <-- 지역변수에 할당
}
const value = 4;
display(value);
console.log(value);

// BAD Case
function displayObj(obj) {
    obj.name = 'chang'; // ❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}
const effy = { name: 'effy' };
displayObj(effy);

// --> GOOD Case
function changeName(obj) {
    // 이름부터 변경하는 느낌을 주도록!
    return { ...obj, name: 'chang' }; // 반환할때는 새로운 오브젝트 만들기!
}
