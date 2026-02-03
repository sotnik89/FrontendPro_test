// Переписати код нижче з використанням конструкції switch…case
// let numOrStr = prompt("input number or string")
//     console.log(numOrStr);

// if (numOrStr === null){
//     console.log("ви скасували")
// } else if (numOrStr.trim() === "") {
//     console.log("Empty string");
// } else if (isNaN(+numOrStr)){
//     console.log(" Number is Ba_NaN");
// } else{
//     console.log("OK!");
// }

let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log("ви скасували")
        break;
    case numOrStr.trim() === "":
        console.log("Empty string")
        break;
    case isNaN(+numOrStr):
        console.log(" Number is Ba_NaN")
        break;
    default: console.log("OK!");
}
