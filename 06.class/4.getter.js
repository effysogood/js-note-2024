// 접근자 프로퍼티 (Accessor Property)

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // -> 생성자에서 이미 한번 만들어지고 난 후, 할당된 값을 바꾸어도 호출되는 값이 바뀌지 않음
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        console.log('setter :', value);
    }
}

const student = new Student('effy', 'choi');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); // get이 호출
student.fullName = 'helen'; // set이 호출
