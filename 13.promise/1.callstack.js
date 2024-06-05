// JS 런타임 환경에서는
// JavaScript Engine > Memory Heap + Call Stack

// Call Stack > Context : 하나의 싱글 컨텍스트 스택
// = 싱글 쓰레드 (Single Tread), 한번에 하나의 일만 실행 가능
// 자바 스크립트는 기본적으로 하나에 한가지 일, '동기적'으로 진행!
// 다만, 무게감 있는(?) 큰 작업을 진행할 때 성능 이슈 발생 가능성 🆙

function a() {
    return 1;
}
function b() {
    return a() + 1;
}
function c() {
    return b() + 1;
}

const result = c();
console.log(result); // 3
