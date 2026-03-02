// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

const myButton = document.querySelector(".myBtn");
const textX = document.querySelector(".text")

function changeColor(){
    textX.classList.toggle("textColorChange")
}
myButton.addEventListener("click", changeColor);



