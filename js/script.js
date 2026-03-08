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

const formLogin = document.querySelector("#formLogin");
const result = document.querySelector("#result")
const errorEmail = document.querySelector("#errorEmail")
const errorPhone = document.querySelector("#errorPhone");
const errorName = document.querySelector("#errorName")

formLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const name = formData.get("name");
    const message = formData.get("message");
    const phone = String (formData.get("phone"));
    const email = String (formData.get("email"));
    const EMAIL_REGEX = /.+@.+\..+/;
    const PHONE_REGEX = /^\+380\d{9}$/;

    if(!PHONE_REGEX.test(phone) && !EMAIL_REGEX.test(email)) {
        errorPhone.classList.add("active")
        return;
    }
    if(!EMAIL_REGEX.test(email)) {
        errorEmail.classList.add("active")
        return;
    }
    if(name.length === 0) {
        errorName.classList.add("active")
        return;
    }
    if(message.length < 5) {
        console.log("Message повинно бути не менше 5 символів");
        return;
    }
    result.innerHTML = `
        <p><strong>name:</strong> ${name}</p>
        <p><strong>message:</strong> ${message}</p>
        <p><strong>phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
    this.reset();
});

