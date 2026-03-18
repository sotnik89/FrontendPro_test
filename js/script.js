

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
