const obj = {
    name: 'effy',
    age: 27,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때, 대괄호 표기법 사용!
function getValue(obj, key) {
    // return obj.key; -> key 이름을 가진 속성이 없기에, 접근 불가.
    return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'gender', 'female');
console.log(getValue(obj, 'gender'));

function deleteKey(obj, key) {
    delete obj[key];
}
deleteKey(obj, 'gender');
console.log(obj);
