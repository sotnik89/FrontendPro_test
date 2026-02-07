

// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).


// let n = +prompt("Enter number");
//
// for (let i = 2; i < n; i++) {
//     let counter = 2;
//     if (n % i === 0 || n % 3 === 0) {
//         console.log("This is not prime number");
//         counter++
//         break;
//     }
//     if (counter === 2){
//         console.log("This is prime number");
//         break;
//     }
// }

let n = +prompt("Enter number");
let isPrime = true;
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime) {
    console.log("Просте");
} else {
    console.log("Не просте");
}

