// String Type
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕하세요'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은 effy\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = 'effy';
let greetings = "'안녕!, " + id + '✋\n즐거운 하루 보내!';
console.log(greetings);

greetings = `'안녕! ${id}✋
즐거운 하루 보내요!`;
console.log(greetings);
