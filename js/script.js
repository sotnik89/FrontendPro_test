// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const promptLink = document.querySelector("#linkFirst");
const enterLink = document.querySelector("#linkSecond");

let url = "https://vinfcup.com.ua/"
promptLink.addEventListener("click", () => {
    window.location.href = (prompt("Enter link"))

});

enterLink.addEventListener("click", () => {
    window.open("https://vinfcup.com.ua/", "_blank")
})
//
// let link = "";
// window.addEventListener("click", (e) => {
//         if (e.target.id === "linkFirst") {
//             link = prompt("Enter link");
//         }
//         if (e.target.id === "linkSecond") {
//             link ? location.href = link : alert("Please enter link")
//         }
//     }
// )