function User(name, balance){
    this.name = name;
    this.balance = balance;
    this.debit = function (amount){
        this.balance = this.balance += amount
    }
    this.showBalance = function (){
        console.log(`${this.name} current balance: ${this.balance} USD`)
    }
    this.withDraw = function (amount){
        if (amount > this.balance){
            console.log("Not enough")
            return;
        }
        this.balance -= amount;
    }
}
function Admin (name, balance, role){
    User.call(this, name, balance);
    this.role = role;
    this.showRole = function (){
        console.log("You are:", this.role);
    }
    this.showBalance = function (){
        console.log(`Admin balance ${this.balance} USD`)
    }
}

user1 = new User("Alex", 100);
user2 = new User("Bob", 200);
userAdmin = new Admin("Alice", 99, "superadmin")

user1.debit(50);
user2.debit(30);
user1.withDraw(20);
user2.withDraw(85);
user1.showBalance();
user2.showBalance();
userAdmin.debit(33);
// userAdmin.withDraw(85);
userAdmin.showBalance();
userAdmin.withDraw(85);
userAdmin.showBalance();



function Car (brand, speed){
    this.brand = brand;
    this.speed = speed;
    this.showInfo = function (){
        console.log(`Brand: ${this.brand} | Speed: ${this.speed} miles / hour`)
    }
}
Car.prototype.showInfo = function (){
    console.log(`Brand: ${this.brand} | Speed: ${this.speed} miles / hour`)
}
Car.prototype.accelerate = function (value){
    this.speed = this.speed += value
}
car1 = new Car ("BMW", 99);
car2 = new Car ("VW", 111);

car1.showInfo();
car2.showInfo();

car1.accelerate(22);
car2.accelerate(33);
car1.showInfo();
car2.showInfo();


// * ls16_1 * //

// * hw ls17_1 *//
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        console.log(`Current balance: ${this.balance}`)
    }
    deposit (amount)
    {
        this.balance += amount
    }
    withdraw (amount)
    {
        if (amount > this.balance) {
            console.log("Not enough money")
            return;
        }
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1000);

account1.getBalance();
account1.deposit(500);
account1.getBalance();
account1.withdraw(200);
account1.getBalance();

//* ls17_hw2
class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    displayInfo(){
        console.log(`"Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}"`)
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"


























// function User(name, balance){
//     this.name = name;
//     this.balance = balance;
//     this.debit = function (amount){
//         this.balance = this.balance += amount;
//     }
//     this.showBalance = function (){
//         console.log(`${this.name} current balance: ${this.balance} USD`)
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


