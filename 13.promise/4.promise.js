function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error('시간이 0보다 작아요'));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

runInDelay(2)
    .then(() => console.log('타이머 완료!')) // 성공 : 필요한 일을 수행
    .catch(console.error) // 실패 : 에러를 처리
    .finally(() => console.log('끝!')); // 성공 or 실패 : 최종적으로 무조건 실행
