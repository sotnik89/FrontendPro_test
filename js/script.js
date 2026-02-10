// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const book = {
    contacts:[
        {
            name: "John",
            phone: 6514502541,
            email: "john@gmail.com"
        },
        {
            name: "Alice",
            phone: 6514502542,
            email: "lice@gmail.com"
        },
        {
            name: "Bob",
            phone: 6514502543,
            email: "bob@gmail.com"
        },
    ],
};
while (true){
    const input = prompt("Add or search. Stop to end");
    if (input === null || input === "Stop") {
        break;
    }
    if(input === "add") {
        const userDate = prompt("Enter phone data: name/phone/email");
        const parts = userDate.split("/");
        const newRecord = {
            name: parts[0],
            phone: parts[1],
            email: parts[2]
        }
        book.contacts.push(newRecord)
    }
    if (input === "search") {
        // console.log("Enter name:", name)
        const userSearch = prompt("Enter user name:");
        let notFound = false;
        for (let i = 0; i < book.contacts.length; i++) {
            if (book.contacts[i].name === userSearch) {
                console.log("Found contact", book.contacts[i]);
                notFound = false;
                break;
            }
        }
        if (notFound) {
            console.log("Not found");
        }
    }
}
console.log("Result contacts:", book)