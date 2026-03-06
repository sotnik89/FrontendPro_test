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
const btn = document.querySelector("#btn")

btn.addEventListener("click", function (){
    console.log(
        formLogin.checkValidity(),
        formLogin.reportValidity()
    );
    formLogin.reset();
})
formLogin.addEventListener("submit", function (e){
    e.preventDefault()
    const formData = new formData(formLogin);
    const phone = formData.get("phone")
    const email = formData.get("email");
    if(!email || !email.trim() || !email.includes("@")){
        errorEmail.style.display = "inline"
    }
    if(!phone || !phone.trim() || !phone.includes("+380")){
        errorPhone.style.display = "inline"
    }
    this.reset();
})


