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

// async/await 비동기 처리
// : Promise를 더 간단하고 읽기 쉽게 처리할 수 있는 문법

async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}

fetchFruits().then((fruits) => console.log(fruits));

/* async/await 키워드, 동작 원리 및 실행 순서 정리해보기
  1. async function fetchFruits() :
    함수가 async 키워드로 정의됨. 이는 해당 함수가 항상 Promise를 반환할 것을 보장.
    또, 함수 내에서 await 키워드 사용 가능

  2. const banana = await getBanana() :
    getBanana()는 비동기 함수로, 프로미스를 반환한다고 가정함.
    await 키워드를 사용하면 프로미스가 해결될 때까지 (즉, getBanana가 완료되어 banana 값을 반환할 때까지) fetchFruits 함수의 실행이 일시 중단.
    banana 변수는 getBanana() 프로미스가 해결된 후 그 반환 값을 갖게 됨

  3. const apple = await getApple() :
    같은 방식으로 getApple() 함수가 호출되고 그 결과를 기다림. 프로미스가 해결되면 apple 변수에 그 반환 값을 할당.
    이 과정은 첫 번째 await가 완료된 후에 시작됨. 즉, 두 번째 await는 첫 번째 프로미스가 해결된 후에야 실행됨.

  4. return [banana, apple] : 
    두 비동기 작업이 모두 완료되고 나서 그 결과로 배열 [banana, apple]을 반환
    이 배열은 fetchFruits 함수의 반환 값으로, 이는 Promise에 포함되어 반환.
    따라서 fetchFruits 함수는 Promise<[banana, apple]>를 반환하게 되는 것.

  5. fetchFruits().then((fruits) => console.log(fruits)) :
    fetchFruits 함수가 호출되면, 반환된 프로미스가 해결될 때까지 기다리고,
    프로미스가 해결되면 then 체인에서 fruits 인수가 해당 프로미스가 반환한 값인 [banana, apple] 배열로 설정된다.
    console.log(fruits)가 실행되어 [banana, apple]이 출력된다.

** 실행 순서를 짧게 정리하면:
  1. fetchFruits 함수가 호출됨
  2. getBanana()가 호출되고, 프로미스가 해결될 때까지 기다림 (await).
  3. getBanana가 반환한 값을 banana에 할당함.
  4. getApple()가 호출되고, 프로미스가 해결될 때까지 기다림 (await).
  5. getApple가 반환한 값을 apple에 할당함.
  6. 배열 [banana, apple]을 반환. 이 반환 값은 fetchFruits의 반환된 프로미스에 포함됨.
  7. fetchFruits().then(...)에서 프로미스가 해결되면, then 콜백이 실행되어 [banana, apple]을 출력함.
    그 결과, fetchFruits 함수는 비동기 작업들을 순차적으로 처리하고 그 결과를 합쳐서 반환.
    fetchFruits 함수 외부에서는 이를 프로미스로 받아서 .then을 통해 결과를 처리할 수 있다




*/
