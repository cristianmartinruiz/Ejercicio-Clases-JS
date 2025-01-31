console.log('Ejercicio Wallet');

class Wallet {
    #monto;
    #operaciones;

    
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    addMoney(amount) {
        this.balance += amount;
    }

    spendMoney(amount) {
        if (amount > this.balance) {
            console.log('No tienes suficiente dinero');
            return;
        }
        this.balance -= amount;
    }
}
