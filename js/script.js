// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
//
//     Покроковий план:
//
//     Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
//     Додайте обробник подій до списку завдань ul, використовуючи делегування.
//     При кліку на будь-якій кнопці видалення, видаліть цей пункт.
//     Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const tasks = document.querySelector("#listOfTask");
const input = document.querySelector("#inputT")
const btn = document.querySelector("#addTask");

tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("deleteBtn")){
        e.target.parentElement.remove();
        return
    }
})
input.addEventListener("change", (e) => {
    console.log(e.target.value)
})

btn.addEventListener("click", (e) => {
    if (input.value.trim()){
        tasks.innerHTML += `<li>${input.value} <button class="deleteBtn">Видалити`
        input.value = "";
    }
})