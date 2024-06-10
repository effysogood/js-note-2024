function loop() {
    const array = [];
    // var과 let의 차이점?
    for (i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop(); // 함수가 들어있는 배열
array.forEach((func) => func()); // 해당 함수들을 호출

// var vs let
// 결과값 다르게 출력 (5x5 vs 0~4)
// var은 블럭 스코프가 존재하지 않고 함수 스코프만 존재!
// 그러므로 공통된 i값을 출력하게 됨! 하나의 변수로만 남아있는 것과 동일 (var i = 5;)
