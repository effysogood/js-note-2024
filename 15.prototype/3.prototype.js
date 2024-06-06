// const dog1 = { name: 'bow', emoji: '🦮' };
// const dog2 = { name: 'wow', emoji: '🐩' };

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수
    // 즉, 인스턴스마다 printName 함수가 존재!
    // this.printName = () => {
    //     console.log(`${this.name} ${this.emoji}`);
    // };
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('bow', '🦮');
const dog2 = new Dog('wow', '🐩');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면
// 프로토타입 레벨의(부모) 프로퍼티는 가려짐(셰도잉 됨)
dog1.printName = () => {
    console.log('hello');
};
dog1.printName();

// 정적 레벨
Dog.hello = () => console.log('hello');
// dog1.hello(); 접근 불가 에러, 정적 레벨
Dog.hello(); // hello
Dog.MAX_AGE = 20;
