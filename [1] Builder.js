"use strict";
var _a;
var Motorcycle = /** @class */ (function () {
    function Motorcycle(style, brand, ccs, oil, fuel) {
        this.style = style;
        this.brand = brand;
        this.ccs = ccs;
        this.oil = oil;
        this.fuel = fuel;
    }
    Motorcycle.prototype.description = function () {
        console.log("This is ".concat(this.style, " motorcycle from ").concat(this.brand, ", with ").concat(this.ccs, " it needs ").concat(this.oil, " oil and ").concat(this.fuel, " fuel"));
    };
    return Motorcycle;
}());
var MotorcycleBuilder = /** @class */ (function () {
    function MotorcycleBuilder() {
        this.style = "";
        this.brand = "";
        this.ccs = 0;
        this.oil = "";
        this.fuel = "";
        this.motorcycle = null;
    }
    MotorcycleBuilder.prototype.getStyle = function () {
        return this.style;
    };
    MotorcycleBuilder.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    MotorcycleBuilder.prototype.getBrand = function () {
        return this.brand;
    };
    MotorcycleBuilder.prototype.setBrand = function (brand) {
        this.brand = brand;
        return this;
    };
    MotorcycleBuilder.prototype.getCcs = function () {
        return this.ccs;
    };
    MotorcycleBuilder.prototype.setCcs = function (ccs) {
        this.ccs = ccs;
        return this;
    };
    MotorcycleBuilder.prototype.getOil = function () {
        return this.oil;
    };
    MotorcycleBuilder.prototype.setOil = function (oil) {
        this.oil = oil;
        return this;
    };
    MotorcycleBuilder.prototype.getFuel = function () {
        return this.fuel;
    };
    MotorcycleBuilder.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
        return this;
    };
    MotorcycleBuilder.prototype.build = function () {
        this.motorcycle = new Motorcycle(this.style, this.brand, this.ccs, this.oil, this.fuel);
        return this.motorcycle;
    };
    MotorcycleBuilder.prototype.getMotorcycle = function () {
        return this.motorcycle;
    };
    return MotorcycleBuilder;
}());
var myMotor = new MotorcycleBuilder()
    .setBrand("Honda")
    .setCcs(400)
    .setOil("Motul")
    .setFuel("Pertamax")
    .setStyle("Caferacer");
myMotor.build();
(_a = myMotor.getMotorcycle()) === null || _a === void 0 ? void 0 : _a.description();
