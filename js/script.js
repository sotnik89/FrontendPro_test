// Дано тризначне число, яке надае користувач, потрибно визначити:
//
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?

// let threeNumber = +prompt("Number"); - змінити тип на number

// let threeNumber = prompt("Number");
// let threeDigit = +threeNumber; - змінити тип на number

let threeNumber = Number(prompt("Number"));
console.log(typeof threeNumber)
if (!threeNumber || isNaN(threeNumber)) {
    console.log("false date")
} else {
    let d1 = Math.trunc(threeNumber / 100);
    let d2 = Math.trunc(threeNumber / 10) % 10;
    let d3 = threeNumber % 10;

    if (d1 === d2 === d3) {
        console.log("Same")
    }
    if (d1 === d2 || d1 === d3 || d2 === d3){
        console.log("Some numbers same");
    } else {
        console.log("Not same");
    }
}