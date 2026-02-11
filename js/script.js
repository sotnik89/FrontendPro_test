// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeChars(str, charsToRemove) {
    return str
    .split('') // Перетворюємо рядок на масив символів
    .filter(char => !charsToRemove.includes(char)) // Залишаємо тільки ті символи, яких немає в масиві charsToRemove
    .join('');// З'єднуємо масив назад у рядок
}
const firstString = prompt();
// const symbolsToRemove = ['l', 'd'];
const result = removeChars(firstString, ['l', 'd']);
console.log(result);

/////
/* first */
// function removeFromArray(str, charToDelete){
//     let newStr = "";
//     for(let i = 0; i <str.length; i++){
//         if(str[i] !== charToDelete){
//             newStr += str[i];
//         }
//     }
//     return newStr
//
// }
// console.log(removeFromArray("hello", "l"))

/* Second */
// function removeFromArray(str, arrayToDelete) {
//     let newStr = "";
//     for (let j = 0; j < arrayToDelete.length; j++) {
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] !== arrayToDelete[j]) {
//                 newStr += str[i];
//             }
//         }
//     }
//     return newStr
// }
// console.log(
//     removeFromArray("hello", ["h", "e"])
// )