// static 정적 프로퍼티, 메소드
// --> class 레벨의 프로퍼티와 메소드
// --> static 키워드 사용 시, 만들어진 instance에 사용이 되는 것이 아닌
//     해당 class에만 그대로 남아있게 됨 (class에서 딱! 한번만 만들어지게 됨)
// --> 그래서, 호출 시에도 class명(레벨에서) 호출해야 함!

class Fruit {
    static MAX_FRUITS = 4;

    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
        // 클래스는 데이터가 채워 있지 않은 template 상태이기 때문.
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit(); // 클래스 레벨의 함수는 클래스 이름으로 접근이 가능
console.log(banana);
console.log(Fruit.MAX_FRUITS); // static 프로퍼티이기에 class 레벨에서만 출력 가능

// apple은 Fruit 클래스의 인스턴스이다.
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
