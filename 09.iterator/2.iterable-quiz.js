// [Sympol.iterator]() : Iterator{ next(): {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// input : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// output : 0, 2, 4, 6, 8, 10, ...

const multiple = {
    [Symbol.iterator]() {
        const max = 10;
        let num = 0;
        return {
            // iterator 객체를 반환
            next() {
                // iterator 객체 내에는 next() 함수 존재
                return { value: num++ * 2, done: num > max }; // 그리고 next()를 호출할 때 마다 value, done을 리턴
            },
        };
    },
};
for (const num of multiple) {
    console.log(num);
}
