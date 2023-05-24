// 삼항 조건 연산자 Tenary Operator

/**
 * false                ▼
 * 조건식 ? 참인 경우 : 거짓인 경우
 * true      ▲
 */

let fruit = 'apple';

if (fruit === 'apple') {
    console.log('🍎');
} else if (fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('👿');
}

fruit === 'apple' ? console.log('🍎') : console.log('🌻');

let emoji = fruit === 'apple' ? '🍎' : '🌻';
console.log(emoji);
