// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
//
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function outer(){
    let count = 0;

    return function (item){
        count += item;
        return count;
    }
}
const sum = outer();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));