// Extends 확장과 상속

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('Eat!');
    }
    sleep() {
        console.log('Sleep!');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('Yellow');
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color); // 부모에 있는 인자 받아오기
        this.ownerName = ownerName;
    }
    play() {
        console.log('Play!');
    }

    // 오버라이딩 overriding : 부모의 함수를 덮어씌우는것, 다른 행동을 구현
    eat() {
        super.eat(); // 부모에 있는 함수 호출하면서 오버라이딩 가능
        console.log('Doggy is eating');
    }
}
const dog = new Dog('Brown', 'Effy');
console.log(dog);
dog.eat();
dog.play();

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.name = 'Polygon';
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}
