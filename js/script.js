// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const unique = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     // Перевіряємо: якщо такого числа ще НЕМАЄ в масиві unique
//     if (!unique.includes(numbers[i])) {
//         // Тоді додаємо його туди
//         unique.push(numbers[i]);
//     }
// }
// console.log(unique)
//
// const numbersX = [1, 3, 3, 5, 5]
// const uniq = [];
// for(let i = 0; i < numbersX.length; i++){
//     if(!uniq.includes(numbersX[i])){
//         uniq.push(numbersX[i])
//     }
// }
// console.log(uniq)

//////// **** Object **** /////
const users = {
    name: "Alex",
    age: 25,
    city: "Odesa"
}
// for (let userId in users){
//     console.log(users[userId])
// }

// Object.keys(users).forEach(userId => {
//     console.log(userId + ":" + users[userId])
// })

for (const [userId, value] of Object.entries(users)){
    console.log(`${userId}: ${value}`)
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Bob: 220
};

// let sum1 = 0;
//
// for (let salary in salaries){
//     sum1 += salaries[salary];
// }
// console.log("Total1:", sum1)

let sum2 = Object.values(salaries).reduce((acc, curr) => acc + curr, 0)
console.log("Total2:", sum2)

// let sum3 = 0
// let salary = Object.keys(salaries)
//
// for (let i = 0; i < salary.length; i++){
//     sum3 += salaries[salary[i]]
// }
// console.log("Total3:", sum3)

let sum4 = 0;
Object.values(salaries).forEach(value => {
    sum4 += value
})
console.log("Total4:", sum4)




//////// **** Array **** /////

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

// let nums = [10, 20, 30, 40, 50];
// let sum = 0;
//
// for (let num of nums ){
//     sum += num;
// }
// console.log(sum)

//** ///
let names = ["Оля", "Петро", "Іван", "Марія"];

for (let name of names) {
    if (name === "Іван") {
        console.log("Finded:", name)
        break;
    }
}

if (names.includes("Іван")){
    console.log("Finded: (second variant)")
} else {
    console.log("Name not found:")
}

let sumFive = 0
for (let i = 1; i <= 10; i++){
    sumFive += 5 * i;
}
console.log("Summa * 5:", sumFive)

////////////////////////////////////
const numbers = [1, 5, 10, 15, 20];

// const filtered = []
// for(let number of numbers){
//     if (number > 10){
//         filtered.push(number)
//     }
// }
// console.log(filtered)

const filtered = numbers.filter(number => number > 10)
console.log(filtered)

const arrayMap = numbers.map(num => num * 2)
console.log(arrayMap)


////////////////////
const namesMap = ["ivan", "petro", "olga", "anna"]
const upperNames = namesMap.map(name => name.toUpperCase())
console.log(upperNames)

///////////
const numbersEv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for(let num of  numbersEv){
    if (num % 2 === 0){
        evens.push(num)
    }
}
console.log(evens)
////////
const fruits = ["яблуко", "банан", "апельсин", "груша"];

fruits.unshift("Виноград")
let index = fruits.indexOf("Виноград");
console.log("New arr:",fruits, "Index of grape:", index)

let lastFruit = fruits.pop(); // Видаляє "апельсин"
console.log("Last fruits deleted",lastFruit);

let firstFruit = fruits.shift(); // Видаляє "груша"
console.log("First fruits deleted", firstFruit); // "Виноград"

/////////////////////////
const fruitsLast = ["яблуко", "банан", "апельсин", "груша"];
let lastFruitX = ''
for(let fruit of fruitsLast){
    if (fruitsLast.indexOf(fruit) === (fruitsLast.length - 1)){
        lastFruitX = fruit;
    }
}
console.log(lastFruitX);

/////////////////////
let words = ["JavaScript", "це", "круто"];
let wordsJoint = words.join(" ");
console.log(wordsJoint)

/////////
const colors = ["yellow", "blue", "green"];
colors.push("red")
colors.unshift("white")
colors.pop()
console.log(colors)

////////////
function hasProduct(products, productName) {
    return products.includes(productName);
}

// Приклад використання:
const myCart = ["хліб", "молоко", "сир", "яблука"];

console.log(hasProduct(myCart, "молоко")); // true
console.log(hasProduct(myCart, "ковбаса")); // false

///////////////////////////////
const fruitsFr = ['apple', 'banana', 'cherry'];
fruitsFr[1] = 'mango';
console.log(fruitsFr);

//////////////
const car = { brand: 'Tesla' };
car.model = 'Model 3';
console.log(car);
/////////
const usersA = [{id: 1, active: true}, {id: 2, active: false}];
const activeUsers = usersA.filter(u => u.active);
console.log(activeUsers);