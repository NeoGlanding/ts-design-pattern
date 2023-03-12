"use strict";
var MotorcycleFactory = /** @class */ (function () {
    function MotorcycleFactory(brand, style, options) {
        this.brand = brand;
        this.style = style;
        this.options = options;
        this.brand = brand;
        this.style = style;
        this.options = options;
    }
    MotorcycleFactory.createVespa = function (oilType) {
        return new this("Vespa", "Scooter", oilType);
    };
    MotorcycleFactory.createMatic = function (brand, cvtType) {
        return new this(brand, "Scooter", cvtType);
    };
    MotorcycleFactory.createSport = function (brand, gearType) {
        return new this(brand, "Fairing Motor", gearType);
    };
    MotorcycleFactory.prototype.getInformation = function () {
        console.log("\n        Brand: ".concat(this.brand, "\n        Style: ").concat(this.style, "\n        Additional: ").concat(this.options, "\n    "));
    };
    return MotorcycleFactory;
}());
var myMatic = MotorcycleFactory.createMatic("Honda", "Premium CVT");
myMatic.getInformation();
