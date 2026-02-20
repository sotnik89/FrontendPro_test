// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

const multiply1 = a => b => a * b;
const result1 = multiply1(5)(2)
console.log(result1)

function multiply (first){
    return function (second){
        return first * second
    }
}
const result = multiply(11)(1254)
console.log(result)

const multi = a => b => a * b;
const result2 = multi(4)(54)
console.log(result2)