// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const linkContainer = document.querySelector("#linkContainer")
let link = "";
linkContainer.addEventListener("click", (e) => {
        if (e.target.id === "linkFirst") {
            const url = prompt("Enter link")
            if (url){
                link = url;
                console.log("Link saved")
            };
        }
        if (e.target.id === "linkSecond") {
            if (link){
                location.href = link
            } else {
                alert("Please enter link")
            }
            // link ? location.href = link : alert("Please enter link")
        }
    }
);