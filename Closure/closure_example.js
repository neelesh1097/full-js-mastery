function createBankAccount() {
  let balance = 1000; // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();

account.deposit(500);   // 1500
account.withdraw(200);  // 1300
account.getBalance();   // 1300
