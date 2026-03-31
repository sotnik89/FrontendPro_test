// Оновлене домашнє завдання:
//
//     Почати створювати застосунок для роботи з todo.
//
//     У застосунку повинно бути:
//
//     – кнопка для завантаження списку todo (робоча кнопка);
//
// – відображення списку todo на сторінці (бажано лімітувати кількість до 10ти);
//
// – кнопка для створення нового todo (можна зімітувати або зробити форму);
//
// – кнопка для видалення todo;
//
// – відображення статусу: завантаження, успіх, помилка.
//
//     Дані взяти з https://jsonplaceholder.typicode.com/

const loadBtn = document.querySelector('#loadBtn');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');
const status = document.querySelector('#status');

let todos = [];

const setStatus = (msg, color) => {
    status.textContent = msg;
    status.style.color = color;
};

const render = () => {
    todoList.innerHTML = todos.slice(0, 10).map(todo => `
    <li>
      <span>${todo.title}</span>
      <button class="delete-btn" id="${todo.id}">Delete</button>
    </li>
  `).join('');
};

loadBtn.addEventListener('click', () => {
    setStatus('⏳ Downloading...', 'orange');

    fetch('https://typicode.com')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
                return Promise.reject();
        })
        .then(data => {
            todos = data;
            render();
            setStatus('✅ Success', 'green');
        })
        .catch(() => setStatus('Mistake', 'red'));
});

addBtn.addEventListener('click', () => {
    const newTodo = { id: Date.now(), title: 'New task' };
    todos = [newTodo, ...todos];
    render();
});

todoList.addEventListener('click', ({ target }) => {
    if (target.classList.contains('delete-btn')) {
        todos = todos.filter(t => t.id != target.id);
        render();
        setStatus('Видалено', 'blue');
    }
});





























// function User(name, balance){
//     this.name = name;
//     this.balance = balance;
//     this.debit = function (amount){
//         this.balance = this.balance += amount;
//     }
//     this.showBalance = function (){
//         console.log(`${name} current balance: ${this.balance} USD`)
//     }
//     this.withdraw = function (amount){
//         if(amount > this.balance){
//             console.log("Not enough")
//             return;
//         }
//         this.balance -= amount
//     }
// }
//
// function Admin(name, balance, role) {
//     User.call(this, name, balance);
//     this.role = role;
//     this.showRole = function (){
//         console.log("You are:", this.role)
//     }
//     this.showBalance = function (){
//         console.log("Admin balance:", this.balance, "USD");
//     }
// }
//
// const user1 = new User ("Alex", 100);
// const user2 = new User ("Bob", 45);
// const userAdmin = new Admin ("Alice", 99, "superadmin")
//
// user1.showBalance();
// user2.showBalance();
// user1.withdraw(90)
// user1.showBalance()
// userAdmin.showBalance()
//
// user1.debit(20);
// user2.debit(60);
// userAdmin.debit(33);
//
// user1.showBalance();
// user2.showBalance();
// userAdmin.showBalance()
//
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//
//     // this.showInfo = function (){
//     //     console.log("Brand:", this.brand, " | ", this.speed, "miles/hour" )
//     // }
// }
//
// Car.prototype.showInfo = function () {
//     console.log("Brand:", this.brand, " | ", this.speed, "miles/hour")
// }
// Car.prototype.accelerate = function (value) {
//     this.speed += value;
// }
//
// const car1 = new Car("BMW", 70);
// const car2 = new Car("VW", 100)
//
// car1.showInfo();
// car2.showInfo();
// car1.accelerate(10)
// car2.accelerate(20)
// car1.showInfo();
// car2.showInfo();
// console.log(car1.showInfo === car2.showInfo)
