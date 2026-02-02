let numOrStr = prompt("input number or string")
// console.log(numOrStr);

// if (numOrStr === null){
//     console.log("ви скасували")
// } else if (numOrStr.trim() === "") {
//     console.log("Empty string");
// } else if (isNaN(+numOrStr)){
//     console.log(" Number is Ba_NaN");
// } else{
//     console.log("OK!");
// }

switch (numOrStr) {
    case null:
        console.log("ви скасували")
        break;
    case '':
        console.log("Empty string")
        break;
    case isNaN(+numOrStr):
        console.log(" Number is Ba_NaN")
        break;
    default: console.log("OK!");
}
