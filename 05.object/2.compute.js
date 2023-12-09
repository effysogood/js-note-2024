const obj = {
    name: 'effy',
    age: 28,
};

// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 '대괄호 표기법' 사용!
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'job', 'swEngineer');
console.log(getValue(obj, 'job'));

function deleteKey(obj, key) {
    delete obj[key];
}
deleteKey(obj, 'age');
console.log(obj);

// -----------
// 대괄호 표기법은 for...in과 함께 객체의 열거 가능한 속성을 순회할때도 사용

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
};

function showProps(obj, objName) {
    let result = '';
    for (let i in obj) {
        // obj.hasOwnProperty()를 사용해서 객체의 프로토타입 체인에 존재하지 않는 속성을 제외
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}
showProps(myCar, 'myCar');

// -----------
// 생성자 함수 사용하기
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
