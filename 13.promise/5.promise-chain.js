function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
    // return Promise.resolve(`🪴 => 🐔`);
}

getChicken()
    .catch((error) => {
        console.log(error.name);
        return '🐓';
    })
    .then((chicken) => fetchEgg(chicken))
    .then((egg) => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg)) // 🪴 => 🐔 => 🥚 => 🍳
    .catch((error) => console.log(error.name));

// Simple Version 가독성 높이기!
getChicken()
    .catch(() => '🐓')
    .then(fetchEgg) // 인자 동일하므로 생략 가능!
    .then(fryEgg)
    .then(console.log);

// 호출 체인에서 함수 호출 시 인자를 생략해도 되는 이유는 자바스크립트의 호출 방식과 Promise 체인의 특성 때문
// Primise 메서드 체인은 각 단계에서 전달된 값을 다음 단계로 자동으로 넘겨줌
// 각 `then` 호출에 전달된 함수는 자동으로 앞 단계의 결과를 인수로 받는다. 🫰 이 특성을 이용한 보다 간결하게 코드 작성 가능 🐝

/*
then 메서드 체인, 인자 전달 방식

1. getChicken(): getChicken 함수는 Promise를 반환

2. catch(() => '🐓') : 에러가 발생하면 '🐓'를 반환
  catch는 에러를 처리하고 처리 결과를 다음 then으로 넘김

3. then(fetchEgg): then 메서드의 첫 번째 인자는 함수
  앞 단계 (catch나 then)의 결과가 이 함수의 인수로 자동으로 전달
  이 경우, fetchEgg 함수는 getChicken()의 성공적으로 가져온 값 또는 '🐓'을 인수로 받음
  즉, fetchEgg가 (chicken) => fetchEgg(chicken)와 같이 호출됨

4. then(fryEgg): (3)과 동일, fetchEgg의 결과가 fryEgg 함수의 인수로 전달
  fryEgg는 (egg) => fryEgg(egg)와 같이 호출됨

5. then(console.log): fryEgg의 결과가 console.log의 인수로 전달
  console.log는 friedEgg 값을 출력하게 됨.

  이렇게 then 메서드 체인에서는 인자를 자동으로 이전 단계의 결과로 넘겨주기 때문에
  함수 호출에서 인수를 명시적으로 다시 작성할 필요가 없다. 특히 함수가 단일 인자를 기다리고 있는 경우 매우 유용함

  따라서, 다음 두 방식은 동일하게 작동
  .then((result) => fetchEgg(result))
  .then(fetchEgg)

*/
