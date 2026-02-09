// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.
const user = {
    name: "John",
    age: 25,
    address: {
        city: "Odesa",
        street: "Glushko"
    }
}
console.log(Object.values(user));
console.log(Object.keys(user));

for (const key of Object.keys(user)){
    console.log(key)
};
for (const key of Object.keys(user)){
    console.log(user[key])
};

for (const key of Object.keys(user)){
    console.log(key, ":", user[key])
};


