// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
//     запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//     його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//     Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
// Все це має бути відображено в одному вікні (алерті).
//

let userYearBirth = prompt("Year of birth");
let userCity = prompt ("Your city");
let favoriteSport = prompt ("Your favorite sport");
let yourAge = 2026 - userYearBirth;
let hellomessage = (`Your age ${yourAge}, your city ${userCity}`)
alert(hellomessage);

switch (userCity) {
    case "Kyiv":
        console.log("You live in the capital of the Ukraine");
        break;
    case "Washington":
        console.log("You live in the capital of the USA");
        break;
    case "London":
        console.log("You live in the capital of the UK");
        break;
    default:
        console.log(`You live in city ${userCity}`);
}

switch (favoriteSport) {
    case "box":
        console.log("Great! Do you want to be Mohammad Ali?");
        break;
    case "football":
        console.log("Great! Do you want to be Lionel Messi?");
        break;
    case "tenis":
        console.log("Great! Do you want to be Roger Federer?");
        break;
}



//     Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

// if (!userYearBirth  || !userCity  || !favoriteSport) {
//     console.log("It's a pity you didn't want to enter your year of berth, city and favorite sport")
// } else {
//
// }