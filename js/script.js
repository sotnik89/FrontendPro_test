
// Call back function
function processArray(arr, callback, logger){
    let result = callback(arr);
    // console.log("Send to server:", result);
    logger(`Send to server ${result}`);
    return result
}
function sum(arr){
    let sum = 0;
    arr.forEach(function(item){
        sum += item;
    });
    return sum;
}
function max(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

function buttonClickLog(data){
    console.log("Sending button to statistics:", data)
}

function totalResultLog(data){
    console.log("Sending total result to statistics:", data)
}
console.log(
    processArray([5, 6, 7, 10, 3], sum, buttonClickLog),
    processArray([3, 8, 11, 15, 32], max, totalResultLog)
)
;


//*hep wor*//
// let str = "Hello World";
// console.log(
//     // str.replace("r", "")
//     str.replaceAll("l", "").replace("d", "")
// );

//*heo wor*//
// function removeChars(str, charsToRemove) {
//     return str.split('').filter(char => !charsToRemove.includes(char)).join('');
// }
// const firstString = prompt();
// const result = removeChars(firstString, ['l', 'd']);
// console.log(result);
////////