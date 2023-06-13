// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this; //생략가능, 생성자 함수가 자동 return 됨
}

// 2. class 클래스 ⭐️Very New⭐️
class Fruits {
    // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruits 클래스의 '인스턴스'이다.
const apple = new Fruits('apple', '🍎');
// orange는 Fruits 클래스의 '인스턴스'이다.
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
class Friends {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}

const chang = new Friends('chang', '🤪');
chang.display();
