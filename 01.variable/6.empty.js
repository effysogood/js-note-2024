// null, undefined
let variable;
console.log(variable); // undefined

variable = null;
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태! 확실하게 비어있는 상태

console.log(typeof 123); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
