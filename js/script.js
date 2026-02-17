

///////////////////


////////////////////////////////////

//Замикання

// function createBankAccount(money, accountName){
//     let balance = money;
//     let userName = accountName;
//     return {
//         deposit: function(amount){
//             balance += amount;
//             console.log(`${userName}'s balance after deposit:`, balance)
//         },
//         withdraw: function(amount){
//             balance -= amount;
//             console.log(`${userName}'s balance after withdraw:`, balance)
//         },
//     };
// }
// let alexAccount = createBankAccount(100, "Alex");
// alexAccount.deposit(100);
// alexAccount.withdraw(50);
//
// let aliceAccount = createBankAccount(400, "Alice");
// aliceAccount.deposit(1000);
// aliceAccount.withdraw(500);

///////////////////////////////////

// function outer(){
//     let counter = 0;
//     function inner (){
//         counter++
//         console.log(counter)
//
//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();

//
// function withdraw(pocket, amount){
// pocket.balance -= amount
// }
// const pocket = {
//     balance: 100
// }
// withdraw(pocket, 20);
// withdraw(pocket, 40);

// Example below
// function createBankAccount(money){
//     let balance = money;
//     function deposit(amount){
//         balance += amount;
//         console.log("Your balance after deposit:", balance)
//     }
//     return    deposit
// }
// let alexAccount = createBankAccount(100);
// alexAccount(200);
// alexAccount(300);

//////


//
// // Call back function
// function processArray(arr, callback, logger){
//     let result = callback(arr);
//     // console.log("Send to server:", result);
//     logger(`Send to server ${result}`);
//     return result
// }
// function sum(arr){
//     let sum = 0;
//     arr.forEach(function(item){
//         sum += item;
//     });
//     return sum;
// }
// function max(arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
//
// function buttonClickLog(data){
//     console.log("Sending button to statistics:", data)
// }
//
// function totalResultLog(data){
//     console.log("Sending total result to statistics:", data)
// }
// console.log(
//     processArray([5, 6, 7, 10, 3], sum, buttonClickLog),
//     processArray([3, 8, 11, 15, 32], max, totalResultLog)
// )
// ;

//IIFE - майже не пишуть ці ф-ції
// let libraryName = "alex";
// (
//     function (){
//         let libraryName = "calculationModul";
//         console.log(libraryName);
//     }
// )();

//*hep wor*//
// let str = "Hello World";
// console.log(
//     // str.replace("r", "")
//     str.replaceAll("l", "").replace("d", "")
// );

//*heo wor*//
// function removeChars(str, charsToRemove) {
//     return str.split('').filter(char => !charsToRemove.includes(char)).join('');
// }
// const firstString = prompt();
// const result = removeChars(firstString, ['l', 'd']);
// console.log(result);
////////

// const array = [6, 8, 11, 22];
// let sum = 0;
// for (let i = 0; i < array.length; i++){
//     sum += array[i]
// }
// console.log(sum)