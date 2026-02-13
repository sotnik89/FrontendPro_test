// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//
//     Наприклад:
//
// const array = [1, 3, 4, 6, 2, 5, 7];
//
// removeElement(array,4);
//
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const firstArray = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    return firstArray.filter(function (firstArrayI) {
            return firstArrayI !== item ? true : false
        }
    );
    // number => number !== item);
}
const result = removeElement(firstArray, 4);
console.log(result);