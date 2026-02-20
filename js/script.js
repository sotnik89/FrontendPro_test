// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function multiply (first){
    return function (second){
        return first * second
    }
}
const result = multiply(11)(1254)
console.log(result)

