// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
//
// 10369
//
// 1 0 3 6 9
// % / Math.floor
let divideNumber = 10369;

let d1 = Math.trunc(divideNumber / 10000);
let d2 = Math.trunc(divideNumber / 1000) % 10;
let d3 = Math.floor(divideNumber / 100) % 10;
let d4 = Math.floor(divideNumber / 10) % 10;
let d5 = divideNumber % 10;

let result = `${d1} ${d2} ${d3} ${d4} ${d5}`;
console.log(result);