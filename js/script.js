// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
//
//     Поля:
//
//         Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
//
//     Під час помилки показувати її під полем.
const formLogin = document.querySelector("#formLogin")
const nameInput = document.querySelector("#nameInput")
const messageText = document.querySelector("#messageText")
const email = document.querySelector("#email")
email.addEventListener("input", function (e){
    const value = email.value;

    // Перевірка на @ та на крапку
    if (!value.includes('@') || !value.includes('.')) {
        e.preventDefault(); // Зупиняємо відправку форми
        // errorDisplay.textContent = "Email обов'язково повинен мати @ та крапку!";
    }
    //
})