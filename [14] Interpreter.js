"use strict";
// In simple terms,
// the Interpreter pattern provides a way to parse and interpret expressions in a language.
// It involves defining a grammar for the language and using that grammar to build an interpreter that can evaluate expressions written in that language.
var QueryInterpreter = /** @class */ (function () {
    function QueryInterpreter() {
        this.queries = {};
    }
    QueryInterpreter.prototype.interpret = function (key, value) {
        return "".concat(key, "=").concat(JSON.stringify(value));
    };
    QueryInterpreter.prototype.addQuery = function (key, value) {
        this.queries[key] = value;
        return this.queries;
    };
    QueryInterpreter.prototype.deleteQuery = function (key) {
        delete this.queries[key];
        return this.queries;
    };
    QueryInterpreter.prototype.toString = function () {
        var temp = [];
        for (var prop in this.queries) {
            temp.push(this.interpret(prop, this.queries[prop]));
        }
        return temp.join("&");
    };
    QueryInterpreter.prototype.getQuery = function () {
        return this.queries;
    };
    return QueryInterpreter;
}());
var queryInterpreter = new QueryInterpreter();
queryInterpreter.addQuery("weather", "rainy");
queryInterpreter.addQuery("cities", ["london"]);
console.log(queryInterpreter.toString());
