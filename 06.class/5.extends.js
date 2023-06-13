// Extends 확장과 상속
// 공통된 프로퍼티나 메소드 있을 경우 상속!

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log(`Eat!`);
    }
    sleep() {
        console.log(`Sleep!`);
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
    // 자식에서 contructor를 정의하는 순간, 부모(Animal)의 변수도 모두 받아와야함
    constructor(color, ownerName) {
        super(color); // 부모-Class에 있는 인자 받아오기, super는 상속받고 있는 부모-Class를 가리킴
        this.ownerName = ownerName;
    }
    play() {
        console.log(`Play!`);
    }

    // 오버라이딩 overriding : 부모의 함수를 덮어 씌우는것, 다른 행동을 구현!
    eat() {
        super.eat(); // 부모-Class에 있는 기능을 그대로 유지하고 싶을 경우 (필수 아님)
        console.log(`Puppy is eating! Wolf Wolf 🐶`); // 이후, 추가 필요한 기능을 구현할 수 있음
    }
}
const dog = new Dog('Brown', 'effy');
console.log(dog);
dog.play();
dog.eat();
// 상속을 통해서 공통된 것은 그대로 가지고, 추가적으로 필요한 것 추가!

// ------------------------------ Practice
// Polygon 클래스 정의
class Polygon {
    constructor(width, height) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
    }
}

// Square라는 이름의 새로운 클래스가 Polygon을 상속
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}
const square = new Square(4);
console.log(square);
