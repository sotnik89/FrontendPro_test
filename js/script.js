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

const errorEmail = document.querySelector("#errorEmail")


const emailAddress = "";
const emailRegex = /.+@.+\..+/;
if (emailRegex.test(emailAddress)) {
        console.log("Email адреса правильна.");
} else {
    errorEmail.style.display = "inline"
    console.log("Неправильний формат email адреси.");
}
console.log(emailAddress)

const phoneNumber = phone.value.trim().match(/^\+380\d{9}$/);
if(emailRegex.test(phoneNumber)){
    console.log("Phone is correct");
} else {
    console.log("Not corrected phone number");
}
console.log(phoneNumber)








// email.addEventListener("input", function (e){
//     const email = e.target.value;
//     if(email.includes("@")){
//         btn.innerText = ""
//     } else {
//         btn.innerText = "Email should have '@'"
//     }
// console.log(btn)
// })

// btn.addEventListener("click", function (){
//     console.log(
//         formLogin.checkValidity(),
//         formLogin.reportValidity()
//     );
//     formLogin.reset();
// })
// formLogin.addEventListener("submit", function (e){
//     e.preventDefault()
//     const formData = new formData(formLogin);
//     const phone = formData.get("phone")
//     const email = formData.get("email");
//     if(!email || !email.trim() || !email.includes("@")){
//         errorEmail.style.display = "inline"
//     }
//     if(!phone || !phone.trim() || !phone.includes("+380")){
//         errorPhone.style.display = "inline"
//     }
//     this.reset();
// })



