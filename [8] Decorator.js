"use strict";
// The Decorator design pattern is like adding toppings to a pizza.
// Imagine you have a basic cheese pizza, and you want to add some extra toppings to it like mushrooms, onions, and pepperoni.
// Each topping is like a decorator that adds extra flavor to the pizza,
// without changing the pizza's basic cheese flavor. You can add as many toppings as you like,
// and they can be added or removed at any time without changing the pizza itself.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base Class
var Pizza = /** @class */ (function () {
    function Pizza(taste) {
        this.taste = taste;
        this.name = "Pizza";
        this.taste = taste;
    }
    Pizza.prototype.eat = function () {
        console.log("Eating Pizza");
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
// Topping Class
var Topping = /** @class */ (function () {
    function Topping(foods) {
        this.foods = foods;
        this.taste = "";
        this.foods = foods;
        this.taste = this.foods.taste;
    }
    Topping.prototype.getName = function () {
        return "Topping";
    };
    return Topping;
}());
var MushroomToppings = /** @class */ (function (_super) {
    __extends(MushroomToppings, _super);
    function MushroomToppings(foods) {
        var _this = _super.call(this, foods) || this;
        _this.foods = foods;
        return _this;
    }
    MushroomToppings.prototype.desc = function () {
        console.log("A ".concat(this.foods.getName(), " with MushroomsTopping"));
    };
    return MushroomToppings;
}(Topping));
var plainPizza = new Pizza("Cheesy");
var mushroomsPizza = new MushroomToppings(plainPizza);
mushroomsPizza.desc();
