 // call bind apply

 const users = [
     {
         name: "Alex",
         surname: "Alexenko",
     },
     {
         name: "Alice",
         surname: "Alisenko",
     },
     {
         name: "Bob",
         surname: "Bobenko"
     }
 ]

 function showInfo(greetings, ending){
     console.log(greetings + this.name + " " + this.surname + ending);
 }

 users.forEach((user) => {
    showInfo.call(user, "Hello, ", " Bye-bye");
 });
console.log("------------------");

for (let i = 0; i < users.length; i++) {
    showInfo.apply(users[i], ["Hello, ", " Bye-bye"]);
}
 console.log("------------------");

 for (let i = 0; i < users.length; i++) {
     showInfo.bind(users[i], "Hello, ", " Bye-bye");
 }

 const obj = {
     name: "Alex",
     surname: "Alexenko",
 }
const showObjInfo = showInfo.bind(obj , "Hello, ", " Bye-bye");
 showObjInfo();
 showObjInfo();

 // Рекурсія
 function factorial(n) {
     let result = 1;
     for(let i = n; i >= 2; i--){
     // for (let i = 1; i <= n; i++)
         result *= i;
     }
     return result;
 }
console.log(
    factorial(5), factorial(4)
);
 console.log("------------------");
 function factorialRecursive(n){
     if(n === 1){
         return 1;
     }
     return n * factorialRecursive(n-1)
 }
 console.log(
     factorialRecursive(5), factorialRecursive(4)
 );
 //f(5) -> 5 * f(4) -> 5 * 4 * f(3) -> 5 * 4 * 3 * f(2) -> 5 * 4 * 3 * 2 * f(1) -> 5 * 4 * 3 * 2 * 1
 //return 5 * return 4 * return 3 ...

 console.log("------------------");

 const university = {
     frontend: [
         {name: "Alex"},
         {name: "Alice"}
     ],
     backend: {
         java: [
             {name: "Bob"},
             {name: "Maria"}
         ],
         pyton: [
             {name: "Oleksandr"},
             {name: "Olga"}
         ]
     }
 }
//
 function countStudents(department) {
     if (Array.isArray(department)) {
         return department.length;
     }
     let total = 0;
for(let key in department){
    total += countStudents(department[key])
}
     return total;
 }
console.log(
    countStudents(university)
);

 // * 1 * //
 // const user = {
 //     name: "Alex",
 //     surname: "Alexenko",
 //     // showInfo: function (){
 //     //    console.log(this.name + " " + this.surname);
 //     // }
 // }
 // const user2 = {
 //     name: "Alice",
 //     surname: "Alisenko",
 // }
 // const user3 = {
 //     name: "Bob",
 //     surname: "Bobenko "
 // }
 // // user.showInfo();
 // showInfo.call(user);// user.showInfo();
 // showInfo.call(user2);
 // showInfo.call(user3);