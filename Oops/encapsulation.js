function BankAccount() {
  let balance = 1000; // private variable

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const acc = BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 1500




class BankAccount {
  #balance = 1000; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

