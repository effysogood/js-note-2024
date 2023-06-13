// 접근 제어자 = 캡슐화 : 내부상으로 필요한 데이터를 외부에서 보이지 않도록 (수정 불가)
// private(#), public(기본), protected

class Fruit {
  #name;
  #emoji;
  #type = 'fruit';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = 'orange'; // #field는 외부에서 접근이 불가능함
console.log(apple);
// apple.display(); // 함수 또한 호출 불가
