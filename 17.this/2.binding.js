// 동적 바인딩 in JS
// java, C#, C++, 대부분의 객체 지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨

function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`My cat's name is ${this.name}`);
    };
}

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`My dog's namex is ${this.name}`);
    };
}

const cat = new Cat('meow');
const dog = new Dog('bow wow');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); // dog의 this로 변환됨, 호출자에 따라 달라짐!
cat.printName();

function printOnMonitor(printName) {
    console.log('Prepare a monitor and run the passed callback');
    printName(); // 호출자가 없음
}
printOnMonitor(cat.printName); // undefined
