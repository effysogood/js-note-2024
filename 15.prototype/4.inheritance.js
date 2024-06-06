// Reminder! 개념을 이해하기 위해 노트를 정리했지만, 최신 js 문법에서는 class 사용!

// 프로토타입을 베이스로한 객체 지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
    // 클래스에서) super(name, emoji, owner)
    Animal.call(this, name, emoji);
    this.owner = 'chang';
}
// 기본값) Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype); // Animal 프로토타입과 연결

Dog.prototype.play = () => {
    console.log(`Let's play!`);
};

function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log(`Let's hunt!`);
};

const dog = new Dog('bow', '🐶', 'effy');
console.log(dog); // Dog > play() > Animal > Obj
dog.play();
dog.printName();

const tiger = new Tiger('titi', '🐯');
console.log(tiger);
tiger.hunt();

// 상속도 확인하기
// 어떤 프로토타입을 참조했는지 확인하고 싶을 때
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Tiger);
console.log(tiger instanceof Tiger);
console.log(tiger instanceof Animal);
