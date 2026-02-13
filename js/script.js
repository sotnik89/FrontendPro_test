// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const mainData = ["street", true, NaN, 24, 6, "city", 6, "country", 9];
const dataNumbers = mainData.filter(function (data){
    return typeof data === 'number' && !isNaN(data) ? true : false;
})
console.log("Filter:", dataNumbers.length);

function average(mainData) {
    let sum = 0;
    mainData.forEach(
        function (mainDataI) {
            if (typeof mainDataI === "number" && !isNaN(mainDataI)) {
                sum += mainDataI;
            }
        }
    );
    // for (let i = 0; i < mainData.length; i++) {
    //     if (typeof mainData[i] === "number" && !isNaN(mainData[i])) {
    //         sum += mainData[i];
    //     }
    // }
    return sum / dataNumbers.length
}
console.log(average(mainData));


////
// const dataFunction = function (mainDataI){
//     console.log(mainDataI)
// }
// mainData.forEach(dataFunction)
//
// /////
// const numbers = [1, 2, 3, "xzv ", true];
// const evenNumbers = numbers.filter(function (number){
//     // if (typeof number === "number") {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//    return typeof number === 'number' ? true : false;
// })
// console.log("Filter:", evenNumbers);

