"use strict";
// --> Class
// template, declare once, no data in
// Objected-oriented programming
// class: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
  // constructor
  constructor(name, age) {
    //fields <= properties
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const effy = new Person("effy", 27);
console.log(effy.name);
console.log(effy.age);
effy.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this.age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0; //undefined
}
const expriment = new Experiment();
console.log(expriment.publicField);
console.log(expriment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Effy";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // effy
Article.printPublisher(); // effy
// <---- 들어오는 데이터와 상관없이 공통으로 쓰는 데이터라면, Static and Static Data 사용 : 메모리 사용 감소

// 5. Inheritance 상속 & 다양성
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.heigh = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of `);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // overwrithing 했지만, super로 부모 프로퍼티 불러옴
    console.log("🚩");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
