// [Sympol.iterator]() : Iterator{ next(): {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// output : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// output : 0, 2, 4, 6, 8, 10, ...

const multiple = {
    [Symbol.iterator]() {
        const max = 10;
        let num = 0;
        return {
            next() {
                return { value: num++ * 2, done: num > max };
            },
        };
    },
};
for (const num of multiple) {
    console.log(num);
}
