// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
    if (!callback) {
        throw new Error('callback 함수를 전달해줘야함');
    }
    if (!seconds || seconds < 0) {
        throw new Error('seconds는 0보다 커야함');
    }

    setTimeout(() => callback(seconds), seconds * 1000);
}

const counter = (sec) => {
    console.log(`${sec}초 후 실행`);
};

// 실행 부분에서 try-catch로 에러를 처리
try {
    runInDelay(counter, 3);
} catch (error) {
    console.error(error.message);
}
