const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: 🍎`);
    },
};
apple.display();

// 객체는 서로 연관된 정보와 함수들을 묶어서 관리할 수 있음
// 객체는 복합데이터! 서로 연관있는 속성과 행동을 묶어주기 위함.
// data(property) + function(method)
// 순수 데이터 객체 + 상태와 행동 객체
