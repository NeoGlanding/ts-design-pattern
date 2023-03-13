// The Bridge design pattern is a structural pattern that separates an abstraction from its implementation so that they can be developed independently.
// The pattern decouples an abstraction (such as an interface, class or method) from its concrete implementation,
// allowing both to be modified or extended without affecting the other.

interface Payment {
  pay: (amount: number, additional?: any) => any;
}

interface CardPaymentPayAdditional {
  cvv: string;
}

class CardPayment implements Payment {
  private password: string = "";
  constructor(private cardNumber: string, private cvv: string) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }

  pay(
    amount: number,
    additional: CardPaymentPayAdditional
  ): { paidAmount: number } {
    if (additional.cvv !== this.cvv)
      throw new Error("Payment cannot be processed since the cvv is incorrect");

    return {
      paidAmount: amount,
    };
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getCvv(password: string) {
    if (this.password === password) return this.cvv;
    else throw new Error("Incorrect Password");
  }
}

class VAPayment implements Payment {
  constructor(private vaAccountNumber: string, private provider: string) {
    this.vaAccountNumber = vaAccountNumber;
    this.provider = provider;
  }

  pay(amount: number, additional?: any): { paidAmount: number; metadata: any } {
    return {
      paidAmount: amount,
      metadata: {},
    };
  }
}

class PaymentGateway {
  constructor(public payment: Payment) {
    this.payment = payment;
  }

  pay(amount: number, password: string = "") {
    if (this.payment instanceof CardPayment) {
      return this.payment.pay(amount, { cvv: this.payment.getCvv(password) });
    } else if (this.payment instanceof VAPayment) {
      return this.payment.pay(amount);
    }
  }
}

const johnVisa = new CardPayment("4242", "123");
johnVisa.setPassword("As123");

const johnVA = new VAPayment("VA-123", "BCA");

const johnVisaPaymentGateway = new PaymentGateway(johnVisa);
const johnVaPaymentGateway = new PaymentGateway(johnVA);

const paidVisa = johnVisaPaymentGateway.pay(3700, "As123");
const paidVA = johnVaPaymentGateway.pay(4700);
console.log(paidVisa);
console.log(paidVA);
