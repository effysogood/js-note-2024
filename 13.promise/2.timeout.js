// JS는 한 번에 한 가지 일을 수행, 그리고 순서를 기억함
// 비동기적으로 수행하기 위해 JS 런타임 환경, 호스트 환경(node/browser)에서 제공해주는 다양한 API를 활용
// Web APIs --> DOM API, setTimeout, setInterval, fetch, event listener

function execute() {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        // 비동기 > 3초 후 콜백 -> task queue --(event loop)--> call stack -> 콜백 실행
    });
    console.log('3');
}

execute();
