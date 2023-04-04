// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascipt are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const effy = { name: "effy", age: 27 };
print(effy);

// with Javascript mage (dynamically typed language)
// can add properties later
effy.hasJob = true;
console.log(effy.hasJob);
// <- 생성된 오브젝트에 값을 추가하는 것이 가능하지만, 지양해야함.

delete effy.hasJob; // <- 삭제도 가능.
console.log(effy.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(effy.name);
console.log(effy["name"]);
effy["hasJob"] = true;
console.log(effy.hasJob);
// 추후 동적으로 key의 value를 받아와야할 때(Runtime에서 결정될 떄), 사용함.

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(effy, "name");
printValue(effy, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
function makePerson(name, age) {}
