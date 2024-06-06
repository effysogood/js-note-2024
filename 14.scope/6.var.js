// var의 특징 (💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서 멘붕 유발
// -> 코드의 가독성과 유지 보수성에 좋지 않음

// 1. 변수를 선언하는 키워드 없이 선언 & 할당이 가능함
// 🤢 선언인지 재할당인지 알 수 없음
something = '💩';
console.log(something);

// 2. 중복 선언 가능
var poo = '💩';
var poo = '💩';
console.log(poo);

// 3. 블록 레벨 스코프 무시
// 지역 변수와 글로벌 변수가 동일 시 되는 대참사 발생
var apple = '사과';
{
    var apple = '🍎';
    {
        var apple = '🍏';
    }
}
console.log(apple); // 🍏

// 4. 함수 레벨 스코프만 지원
function example() {
    var dog = '🐶';
}
console.log(dog);
