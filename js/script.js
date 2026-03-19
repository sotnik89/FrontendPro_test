































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
