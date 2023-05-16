/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ ->  최대한 의미있게 '구체적인' 이름으로 작성!
 */

let apple;
let redApple;

// Bad Cases 💩
let number = 20;

// Good Cases ✨
let myAge = 20;

// Bad Cases 💩
let audio1;
let audio2;
let audioOld;
let audioNew;

// Good Cases ✨
let windAudio;
let backgroundAudio;

// Tip 🍯
let audioBackground;
let audioWind;
//--> 위치 일정하게 작성하면 찾기 쉬움!
