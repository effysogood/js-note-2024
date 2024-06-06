const dog = { name: 'cherry', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const descriptor = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(descriptor);

Object.defineProperty(dog, 'name', {
    value: '멍멍',
    writable: false,
    enumerable: false,
    configurable: false,
});
console.log(dog.name);
console.log(Object.keys(dog)); // emoji만 출력됨
delete dog.name;
console.log(dog.name); // 수정 불가 설정, 삭제되지 않음

const student = {};
Object.defineProperties(student, {
    // Data 속성
    firstName: {
        value: 'effy',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'choi',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    // Accessor 속성 (getter와 setter)
    // -> writable 속성 필요 없음
    fullName: {
        get() {
            return `${this.lastName} ${this.firstName}`;
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        enumerable: true,
        configurable: true,
    },
});
console.log(student);
student.fullName = 'chen changan';
// setter 메소드, 속성 할당처럼 호출되어야함.
console.log(student.fullName);
