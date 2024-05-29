// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 방식)
// 2. 클래스 👍

// (OLD) 생성자 함수 (오래된 고전적인 방법, 요즘 잘 사용하지 않음)
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this; //생략가능, 생성자 함수가 자동 return 됨
}

// Class
// 객체를 생성할 수 있는 Template (청사진, 틀, 양식)
// 객체 지향 프로그래밍 Object-Oriented Programming

// (⭐️Very New⭐️) Class
class Fruits {
    // 생성자 -> 'new' 키워드로 '객체를 생성' 할때 호출되는 함수
    constructor(name, emoji) {
        // 필요한 객체의 데이터를 채워줌
        this.name = name;
        this.emoji = emoji;
    }

    // 생성자 밖에서 함수를 정의 (생성자 내에서 작성 가능하기는 함)
    // this.를 붙이지 않고, "함수의 이름만 작성", function 키워드도 앞에 붙이지 않음
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 '인스턴스'이다.
const apple = new Fruits('apple', '🍎');
// orange는 Fruit 클래스의 '인스턴스'이다.
const orange = new Fruits('orange', '🍊');

// --> 클래스를 통해 만들어진 객체는 '인스턴스'라고 칭함

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {
    key: 'value',
};

// -------- Practice
class Friend {
    constructor(name, age, emoji) {
        this.name = name;
        this.age = age;
        this.emoji = emoji;
    }
    display = () => {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Feature: ${this.emoji}`
        );
    };
}
const chang = new Friend('chang', 30, '👽');
chang.display();
