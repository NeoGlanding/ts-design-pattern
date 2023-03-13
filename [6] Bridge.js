"use strict";
// The Bridge design pattern is a structural pattern that separates an abstraction from its implementation so that they can be developed independently.
// The pattern decouples an abstraction (such as an interface, class or method) from its concrete implementation,
// allowing both to be modified or extended without affecting the other.
var CardPayment = /** @class */ (function () {
    function CardPayment(cardNumber, cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.password = "";
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    CardPayment.prototype.pay = function (amount, additional) {
        if (additional.cvv !== this.cvv)
            throw new Error("Payment cannot be processed since the cvv is incorrect");
        return {
            paidAmount: amount,
        };
    };
    CardPayment.prototype.setPassword = function (password) {
        this.password = password;
    };
    CardPayment.prototype.getCvv = function (password) {
        if (this.password === password)
            return this.cvv;
        else
            throw new Error("Incorrect Password");
    };
    return CardPayment;
}());
var VAPayment = /** @class */ (function () {
    function VAPayment(vaAccountNumber, provider) {
        this.vaAccountNumber = vaAccountNumber;
        this.provider = provider;
        this.vaAccountNumber = vaAccountNumber;
        this.provider = provider;
    }
    VAPayment.prototype.pay = function (amount, additional) {
        return {
            paidAmount: amount,
            metadata: {},
        };
    };
    return VAPayment;
}());
var PaymentGateway = /** @class */ (function () {
    function PaymentGateway(payment) {
        this.payment = payment;
        this.payment = payment;
    }
    PaymentGateway.prototype.pay = function (amount, password) {
        if (password === void 0) { password = ""; }
        if (this.payment instanceof CardPayment) {
            return this.payment.pay(amount, { cvv: this.payment.getCvv(password) });
        }
        else if (this.payment instanceof VAPayment) {
            return this.payment.pay(amount);
        }
    };
    return PaymentGateway;
}());
var johnVisa = new CardPayment("4242", "123");
johnVisa.setPassword("As123");
var johnVA = new VAPayment("VA-123", "BCA");
var johnVisaPaymentGateway = new PaymentGateway(johnVisa);
var johnVaPaymentGateway = new PaymentGateway(johnVA);
var paidVisa = johnVisaPaymentGateway.pay(3700, "As123");
var paidVA = johnVaPaymentGateway.pay(4700);
console.log(paidVisa);
console.log(paidVA);
