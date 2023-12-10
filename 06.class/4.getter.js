// 접근자 프로퍼티 (Accessor Property)
// getter와 setter는 데이터를 보호하기 위해 사용

// getter는 객체의 attribute(변수)를 반환하고
// setter는 파라미터를 받아서 attribute에 할당

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // --> 생성자에서 이미 한번 만들어지고 난 후, 할당된 값을 바꾸어도 호출되는 값이 바뀌지 않음
    }

    // Get 접근 : 함수이지만 고정된 값이 아닌 호출하는 시점, 데이터를 만들어서 return
    // --> fullname은 속성에 가까움, firstName + lastName 두 속성을 조합한 것.
    // --> 속성이라고 간주되는 부분들을 함수로 만들어야 할 때 get 키워드 사용!
    // --> 속성(property)에 접근하듯이 만들 수 있음
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Set 할당 : 객체의 속성을 변경하는 메서드
    set fullName(value) {
        console.log(`set: ${value}`);
    }
}

const student = new Student('effy', 'choi');

student.firstName = 'chang';
// --> 이미, 생성자가 호출되고 난 후, update되지 않기에 값을 변경해도 반영되지 않음.

console.log(student.firstName);
console.log(student.fullName); // get이 호출
student.fullName = 'helen'; // set이 호출
