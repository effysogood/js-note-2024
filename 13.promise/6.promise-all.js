function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error(`There is no orange.`));
}

// 바나나와 사과를 함께 가지고 오기
getBanana() //
    .then((banana) =>
        getApple() //
            .then((apple) => [banana, apple])
    )
    .then((result) => console.log('chain', result)); // 4초가 걸림

// Promise.all 병렬적으로 한 번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]) //
    .then((fruits) => console.log('all', fruits)); // 3초가 걸림

/* -- Promise에서 사용 가능한 static 함수들 -- */

// 01 Promise.race
// : 주어진 Promise들 중 제일 빨리 수행된 것이 이김
Promise.race([getBanana(), getApple()]) //
    .then((fruit) => console.log('race', fruit));

// 02 Promise.all
// : 성공한 결과만 출력하고 싶다면
Promise.all([getBanana(), getApple(), getOrange()]) //
    .then((fruits) => console.log('all-error', fruits))
    .catch(console.log); // 오렌지에서 에러 발생

// 03 Promise.allSettled
// : 모든 결과를 받아보고 싶다면, 결과를 배열로 출력
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
    .then((fruits) => console.log('all-settle', fruits)) //
    .catch(console.log);
