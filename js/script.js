
const user = {
    name: "Alex",
    age: 35,
    city: "Kharkiv",
    id: 1,
    address: {city: "Odesa", street: "Levitana"}
};
console.log(user.name);
console.log(
    "AGE:", user["age"]
);

user.isAdmin = true;
user.name = "BOB";
// delete user.city; // видалити ключ

console.log(user);

console.log(
    Object.keys(user),
    Object.values(user),
    Object.entries(user),
);

// const fruits =["Apple", "Banana", "Lemon", "Peach", 4, true, false, [1, 2, 3], {id1: 1, id2: 2}];

const fruits =["Apple", "Banana", "Lemon", "Peach"];

// console.log(
//     "Fruits:", fruits,
//     "First fruit:", fruits[0],
//     "Length:", fruits.length,
// )
// for(let i = 0; i < fruits.length; i++){
//     console.log("I:", i, "Array item:", fruits[i]);
// }
// for(const item of fruits){ //fruits[0] fruits[1] ...
//     console.log(item);
// }

// fruits.push("Orange"); // додає в кінець
// console.log("Fruits after push:", fruits);

// fruits.pop(""); // видаляє з кінця
// console.log("Fruits after pop:", fruits);

// fruits.unshift("Orange") // додати на початок
// console.log("Fruits after unshift:", fruits);

// fruits.shift("") // видалити з початку

// fruits[1] = "Orange"; // замінити по індексу

// fruits.splice(1, 2, "Orange")

// console.log(
//     fruits.indexOf("Banana") // якщо нема то буде -1
// );

// console.log(
//     fruits.includes("Banana") // true or false
// );

const fruit =["Apple", "Banana", "Lemon", "Peach"];
const vegetables = ["cucumber", "tomato"];

const result = fruit.concat(vegetables);
console.log(result);

for(const key in user){
    console.log(key)
}
for(const key in user){
    console.log(
        "key:", key, "value:", user[key], typeof key)
}
console.log(Object.keys(user));

for(const key in fruit){
    console.log(
        "key:", key)
}
// const str = "Hello!";
// console.log(str[0]);

// реестр студентів

const students = [
    // {
    //     name: "John",
    //     score: 40
    // },
    // {
    //     name: "Alice",
    //     score: 50
    // },
    // {
    //     name: "Bob",
    //     score: 70
    // },
    // {
    //     name: "Ihor",
    //     score: 10
    // }
];
let sum = 0;

while (true) {
    const input = prompt("Enter student name and mark (name,mark):");
    if(input === null || input === "STOP"){
        break;
    }
    const parts = input.split(",")
    // console.log(parts);

    const student = {
        name: parts[0],
        score: +parts[1]
    };
    students.push(student);
}

for (const student of students){
    console.log(
        "Students name", student.name, "score----->", student.score);
}
for(let i = 0; i < students.length; i++) {
    sum += students[i].score; //students[0] -> {name:alex, score:20}.score
};
console.log("Average:", sum / students.length)

let bestScore = 0;
let bestStudentIndex = 0;
for(let i = 0; i < students.length; i++) {
        if(students[i].score > bestScore){
        bestScore = students[i].score;
            bestStudentIndex = i;
    }
}
// console.log(bestScore, students[bestStudentIndex]);
console.log("Best student:", students[bestStudentIndex].name, "with a score:", bestScore);


