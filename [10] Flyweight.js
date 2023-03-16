"use strict";
// The Flyweight design pattern is a structural design pattern that aims to reduce the memory usage of an application by sharing common data among multiple objects.
// The pattern achieves this by separating the intrinsic state (shared data) from the extrinsic state (unique data) of objects.
// In other words, the Flyweight pattern shares the common state across objects,
// thereby reducing the total number of objects that need to be created and managed.
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var Reader = /** @class */ (function () {
    function Reader() {
        this.notes = [];
    }
    Reader.prototype.addNote = function (note) {
        this.notes.push(note);
    };
    Reader.prototype.getNotes = function () {
        this.notes.forEach(function (el) { return console.log(el); });
    };
    return Reader;
}());
var myBook = new Book("Ihsan Book", "Ihsan");
var rowan = new Reader();
rowan.addNote({ page: 40, notes: "THis is very good books" });
var jonah = new Reader();
jonah.addNote({ page: 29, notes: "Woow amazing" });
rowan.getNotes();
jonah.getNotes();
