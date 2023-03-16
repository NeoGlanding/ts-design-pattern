"use strict";
// Basically facade is just simplifying operation from different classes
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.engineStart = function () {
        console.log("Engine started");
    };
    Engine.prototype.engineStop = function () {
        console.log("Engine stopped");
    };
    return Engine;
}());
var Gear = /** @class */ (function () {
    function Gear() {
    }
    Gear.prototype.operate = function () {
        console.log("Gear operating");
    };
    Gear.prototype.stop = function () {
        console.log("Gear stop");
    };
    return Gear;
}());
var Car = /** @class */ (function () {
    function Car(engine, gear) {
        this.engine = engine;
        this.gear = gear;
    }
    Car.prototype.start = function () {
        this.engine.engineStart();
        this.gear.operate();
        console.log("Car started");
    };
    Car.prototype.stop = function () {
        this.engine.engineStop();
        this.gear.stop();
        console.log("Car Stopped");
    };
    return Car;
}());
var myEngine = new Engine();
var myGear = new Gear();
var myCar = new Car(myEngine, myGear);
// myCar.start();
myCar.start();
