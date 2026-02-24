// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// let ladder = {
//     up: function () { // підніматиме вас на одну сходинку
//     },
//     down: function () { // опускатиме вас на одну сходинку
//     },
//     showStep: function () { // показує поточну сходинку
//     }
// };
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
//
//     ladder.up();
//
// ladder.up();
//
// ladder.down();
//
// ladder.showStep(); // 1
//
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
//
// ladder.up().up().down().showStep(); // 1
//
// Такий підхід широко використовується в бібліотеках JavaScript.

let ladder = {
    step: 0,
    up: function () {
        this.step += 1; // this.step++;
        return this
    },
    down: function () {
        this.step -= 1; // this.step--;
        return this
    },
    showStep: function () {
        console.log("Current status:", this.step)
            return this
    }
};
ladder.up().up().down().showStep();
