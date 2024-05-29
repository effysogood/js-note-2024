// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서 이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
    constructor(name, dept, hoursPerMonth, payRate) {
        this.name = name;
        this.dept = dept;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }

    calculatePay = () => {
        return this.hoursPerMonth * this.payRate;
    };
}

class FullTimeEmployee extends Employee {
    static #PAY_RATE = 10000;
    constructor(name, dept, hoursPerMonth) {
        super(name, dept, hoursPerMonth, FullTimeEmployee.#PAY_RATE); // 정적 프로퍼티를 사용했으므로 클래스 키워드로 호출해야함.
    }
}

class PartTimeEmployee extends Employee {
    static #PAY_RATE = 8000;
    constructor(name, dept, hoursPerMonth) {
        super(name, dept, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
    }
}

const effy = new FullTimeEmployee('effy', 'sw', 40);
const chang = new PartTimeEmployee('chang', 'finance', 20);
console.log(effy.calculatePay());
console.log(chang.calculatePay());
