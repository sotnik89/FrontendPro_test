// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const numbers = [1, 5, 6, 8, 11, 18, 20, 22, 27];
const evenNumbers = [];
// for(const number of numbers){
//
//
// }
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
        console.log(evenNumbers)
    }

    for (const number of numbers){

    }

    // } else {
    //     console.log("This is not even number")
    // }

}