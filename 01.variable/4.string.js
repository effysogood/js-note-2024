// String Type
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕!'";
console.log(string);

string = '안녕!\n에피야\t\t내 이름은 \\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal using `Backtick`)
let id = 'effy';
let greetings = "'안녕!, " + id + "🤚\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `Hello, ${id}🤚 
Have a good day!`;
console.log(greetings);
