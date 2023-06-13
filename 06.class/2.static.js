// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;

    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음 (class는 데이터가 채워져 있지 않은 template 상태)
        //
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// 우리가 굳이 오브젝트를 별도로 만들지 않아도 비슷한 내용의 함수들 묶어서 관리 가능!
Math.pow();
Number.isFinite(1);
