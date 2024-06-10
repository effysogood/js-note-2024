// this : 문맥에 따라 이것이 가리키는 것이 달라짐

/**
 * 글로벌 컨텍스트의 this
 * browser : window (다양한 api 활용 가능)
 * node.js : global (module)
 */

// 전역에서 window this는 globalThis와 동일
// 노드에서 this란 모듈, globalThis는 객체

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout()
// setTimeout()

/** 함수 내부에서의 this
 * 엄격 모드에서는 undefined, 함수 스코프 내 this 정의되어 있지 않음
 * 느슨한 모드에서는 globalThis
 */

function func() {
    console.log(this);
}
func();

/** 생성자 함수 또는 클래스에서의 this
 * 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    };
}
const cat1 = new Cat('meow');
const cat2 = new Cat('mew');
cat1.printName();
cat2.printName();
