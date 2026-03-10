//Modal window
const openModalBtn = document.querySelector("#open-modal-btn");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal-btn");

function closeModal(){
    modal.classList.remove("active");
}
openModalBtn.addEventListener("click", () => {
    modal.classList.add("active")
})
// closeModalBtn.addEventListener("click", () => {
//     modal.classList.remove("active");
// });
modal.addEventListener("click", closeModal)
closeModalBtn.addEventListener("click", closeModal);

//Cart + Product
const products = [
    {id: 1, name:"Laptop", price: 2500},
    {id: 2, name:"Mouse", price: 700},
    {id: 3, name:"Keyboard", price:  1200},
    {id: 4, name:"Monitor", price: 8000},
];
const cart = [];

const productList = document.querySelector("#product-list");
const cartContainer = document.querySelector("#cart");

function renderProducts() {
    // products.forEach(product => {
    //     const element = document.createElement("div");
    //     productList.append(element);
    // })

    let productsHtml = "";
    products.forEach(product => {
        productsHtml += `
        <div class="product-cart">
        <h3>${product.name}</h3>
         <h3>${product.price}</h3>
         <button>
         Add to card
        </button>    
        </div>
        `;
    })
    productList.innerHTML = productsHtml;
}
renderProducts()







// code style
// use strict
"use strict";

let name = "Ihor";
console.log(name);

function sum (a, b){
    console.log(a + b);
}
sum(4, 5)

function show(){
    console.log(this)
}
show()

//kiss - keep is sample, stupid
// function isEven(number){
//     // if (number % 2 === 0){
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return number % 2 === 0;
// }
// console.log(isEven(7));

// DRY - don't repeat yourself
function addTax(price){
    return price + price * 0.2
}

let price1 = 100;
let total1 = addTax(price1)
// let total1 = price1 + price1 * 0.2;

let price2 = 100;
let total2 = addTax(price2)
// let total2 = price2 + price2 * 0.2;

// YAGNI - You aren't gonna need it

const arrToFilter = [2, 3, 5, 6, 8]
function isEvenFirst(numbers){
    const result = [];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            result.push(numbers[i])
        }
    }
    return result
}

function isEvenSecond(numbers){
    return numbers.filter(item => item % 2 === 0)
}

const result = arrToFilter.filter(number => number % 2 === 0);

console.log(
    isEvenFirst(arrToFilter),
    isEvenSecond(arrToFilter),
    result
);
