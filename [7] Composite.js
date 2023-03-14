"use strict";
// The Composite design pattern is a structural design pattern that allows you to compose objects into tree-like structures to represent part-whole hierarchies.
// With this pattern,
// you can create a single object or a group of objects in the same way,
// treating them as a single entity.
var ProductLeaf = /** @class */ (function () {
    function ProductLeaf(name, price) {
        this.name = name;
        this.price = price;
        this.price = price;
        this.name = name;
    }
    ProductLeaf.prototype.operation = function () {
        console.log("".concat(this.name, " operated"));
    };
    return ProductLeaf;
}());
var ProductComposite = /** @class */ (function () {
    function ProductComposite(name) {
        this.name = name;
        this.products = [];
        this.name = name;
    }
    ProductComposite.prototype.operation = function () {
        console.log("Composite ".concat(this.name, " operation"));
    };
    ProductComposite.prototype.addToComposite = function (product) {
        this.products.push(product);
    };
    ProductComposite.prototype.getComopositeList = function () {
        this.products.forEach(function (el) { return console.log(el); });
    };
    return ProductComposite;
}());
var samsung = new ProductLeaf("Samsung Product", 5000);
var oppo = new ProductLeaf("OPPO Product", 1000);
var phoneComposite = new ProductComposite("Phone");
phoneComposite.addToComposite(samsung);
phoneComposite.addToComposite(oppo);
// phoneComposite.getComopositeList();
var shopComposite = new ProductComposite("Antara shop");
shopComposite.addToComposite(phoneComposite);
shopComposite.getComopositeList();
