"use strict";
// The Monostate pattern is a variation of the Singleton pattern that achieves the same goal of having a single instance of a class,
// but with a different implementation approach.
// In the Monostate pattern,
// all instances of a class share the same state, which is stored in static member variables.
// This means that any changes to the state made by one instance are visible to all other instances of the class
var Monostate = /** @class */ (function () {
    function Monostate() {
    }
    Object.defineProperty(Monostate.prototype, "getState", {
        get: function () {
            return Monostate.monoState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monostate.prototype, "setState", {
        set: function (value) {
            Monostate.monoState = value;
        },
        enumerable: false,
        configurable: true
    });
    Monostate.monoState = "Default Value";
    return Monostate;
}());
var firstInstance = new Monostate();
var secondInstance = new Monostate();
console.log(secondInstance.getState);
firstInstance.setState = "Ezzet brother";
console.log(secondInstance.getState);
