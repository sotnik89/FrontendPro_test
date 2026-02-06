

// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).


// let n = +prompt("Enter number");
// let counter = 2;
// for (2; n < 5; n++) {
//     if (5 % n === 0) {
//         console.log("this is prime number");
//         counter++
//         break
//     } else {
//         console.log("this is not prime number");
//     }
// }

let n = +prompt("Enter number");

for (let i = 2; i < n; i++) {
    let counter = 2;
    if (n % i === 0) {
        console.log("This is not prime number");
        counter++
        break;
    }
    if (counter === 2){
        console.log("This is prime number");
        break;
    }
}