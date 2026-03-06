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
const phone = document.querySelector("#phone")
const errorPhone = document.querySelector("#errorPhone");
const errorEmail = document.querySelector("#errorEmail")


formLogin.addEventListener("submit", function (e){
    e.preventDefault()
    const formData = new formData(formLogin)
    const email = formData.get("email")
    const phone = formData.get("phone")
    if(!email || !email.trim() || !email.includes("@")){
        errorEmail.style.display = "inline"
    }
    if(!phone || !phone.trim() || !phone.includes("+380")){
        errorPhone.style.display = "inline"
    }
    formLogin.reset();
})


// const numbers = [2, 4, 5, 3, 7, 9]
// function findMin (numbers){
//     let min = numbers[0];
//     for(let i = 1; numbers.length > i; i++){
//         if(numbers[i] < min){
//             min = numbers[i]
//         }
//     }
//     return min
// }
// console.log(findMin(numbers));

