// 클래스를 베이스한 객체 지향 프로그래밍

class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    printName() {
        return `${this.name} ${this.emoji}`;
    }
}

class Dog extends Animal {
    play() {
        return `Let's Play!`;
    }
}

class Tiger extends Animal {
    constructor(name, emoji, owner) {
        super(name, emoji);
        this.owner = owner;
    }
    hunt() {
        return `Let's hunt!`;
    }
}

const dog = new Dog('bow', '🐶');
console.log(dog);
dog.play();
console.log(dog.printName());

const tiger = new Tiger('titi', '🐯', 'chang');
console.log(tiger);
tiger.hunt();
console.log(tiger.printName());

console.log(tiger instanceof Animal);
console.log(dog instanceof Animal);
