// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);

let userName = prompt("Enter your name");
let userSureName = prompt("Enter your sureName");
let userAge = prompt("Enter your age");
let helloMessage = `Hello, ${userName}. Your age, ${userAge}. Surname, ${userSureName}`;
console.log(helloMessage);