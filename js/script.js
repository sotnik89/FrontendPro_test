// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
//     Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//     Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(name, lastName, birthYear, grades) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades || [];
    this.attendance = new Array(25);
    this.attendanceIndex = 0;
}

Student.prototype.presentCount = function(count) {
    for (let i = 0; i < count; i++) {
        this.present();
    }
    return this;
};

Student.prototype.absentCount = function(count) {
    for (let i = 0; i < count; i++) {
        this.absent();
    }
    return this;
};

Student.prototype.showAge = function() {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(`Вік студента: ${this.name}  ${age} років`);
    return age;
};

Student.prototype.showAverageGrade = function() {
    if (this.grades.length === 0)
        return 0;
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    }
    return sum / this.grades.length;
};

Student.prototype.present = function() {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = true;
        this.attendanceIndex++;
        console.log(true)
    }
    return this;
};

Student.prototype.absent = function() {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = false;
        this.attendanceIndex++;
        console.log(false)
    }
    return this;
};

Student.prototype.summary = function() {
    let avgGrade = this.showAverageGrade();
    let presents = 0;
    for (let i = 0; i < this.attendanceIndex; i++) {
        if (this.attendance[i] === true)
            presents++;
    }
    let ratio = presents / this.attendanceIndex;
    console.log(`Студент: ${this.name} ${this.lastName},
Середній бал: ${avgGrade.toFixed(2)},
Відвідуваність: ${(ratio * 100).toFixed(0)} %`
    );
    if (avgGrade > 90 && ratio > 0.9) {
        console.log("Молодець!");
    } else if (avgGrade > 90 || ratio > 0.9) {
        console.log("Добре, але можна краще");
    } else {
        console.log("Редиска!");
    }
};

const andriy = new Student("Andriy", "Petrenko", 2002, [93, 88, 98]);
const alice = new Student("Alice", "Koval", 2003, [98, 91, 92]);

andriy.presentCount(22).absentCount(3);
andriy.summary();

alice.presentCount(10);
alice.summary();

andriy.present();
andriy.absent();

andriy.showAge();
alice.showAge();




























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
