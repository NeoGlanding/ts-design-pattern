"use strict";
var Address = /** @class */ (function () {
    function Address(streetName, city, country, postalCode) {
        this.streetName = streetName;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
        this.streetName = streetName;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
    }
    Address.createAddress = function (information) {
        return new this(information.streetName, information.city, information.country, information.postalCode);
    };
    Address.generateAddressPerCountryFunction = function (country) {
        return function (information) {
            return new Address(information.streetName, information.city, country, information.postalCode);
        };
    };
    var _a;
    _a = Address;
    Address.generateIndonesianAddress = _a.generateAddressPerCountryFunction("Indonesia");
    Address.generateSingaporeAddres = _a.generateAddressPerCountryFunction("Singapore");
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        if (age < 0)
            throw new Error("Age should be same or more than 0");
        this.age = age;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.introduceMyself = function () {
        console.log("Hi my name is ".concat(this.name, ", I am ").concat(this.age, " and here's my address :\n      ").concat(this.address.streetName, ", ").concat(this.address.city, ", ").concat(this.address.country, " ").concat(this.address.postalCode, "\n      "));
    };
    Person.prototype.deepCopy = function () {
        return new Person(this.name, this.age, Address.createAddress(this.address));
    };
    return Person;
}());
var prototypeMan = new Person("Prototype", 0, Address.generateIndonesianAddress({
    streetName: "Mandor Sanun",
    postalCode: "8585858",
    city: "Kab. Bogor",
}));
var ihsan = prototypeMan.deepCopy();
ihsan.setName("Ihsan");
ihsan.setAge(20);
ihsan.setAddress(Address.generateIndonesianAddress({
    streetName: "Jalan Roti Bakar",
    postalCode: "485858",
    city: "Depok",
}));
var brian = prototypeMan.deepCopy();
brian.setName("Brian");
brian.setAge(14);
brian.setAddress(Address.generateSingaporeAddres({
    streetName: "Ubi Avenue Rd",
    postalCode: "448585",
    city: "Singapore",
}));
console.log(ihsan);
console.log(brian);
