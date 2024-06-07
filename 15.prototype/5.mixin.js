// 상속은 단 하나의 부모만 상속 가능
// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나)
// 하지만! 여러개의 함수들을 상속하고 싶다면
// Mixin

const play = {
    play: function () {
        console.log(`${this.name} is playing!`);
    },
};

const sleep = {
    sleep: function () {
        console.log(`${this.name} is sleeping`);
    },
};

function Dog(name) {
    this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('cherry');
console.log(dog);
dog.play();
dog.sleep();

// JS 클래스는??? 클래스처럼 보이지만 내부적으로는 프로토타입 베이스
class Animal {}
class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('titi');
console.log(tiger);
tiger.play();
tiger.sleep();
