class Payment {
  pay() {
    throw new Error("pay() must be implemented");
  }
}

class CreditCardPayment extends Payment {
  pay() {
    return "Paid using Credit Card";
  }
}

class UpiPayment extends Payment {
  pay() {
    return "Paid using UPI";
  }
}


// function processPayment(payment) {
//   console.log(payment.pay());
// }

const payment1 = new CreditCardPayment();
console.log(payment1.pay());

const payment2 = new UpiPayment();
console.log(payment2.pay());
