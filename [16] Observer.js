"use strict";
// The Observer design pattern is a behavioral pattern that defines a one-to-many dependency between objects.
// When the state of one object (the subject) changes, all of its dependents (the observers) are notified and updated automatically.
// This pattern is useful when you need to decouple the logic that triggers a change from the logic that reacts to the change.
// An analogy for the Observer pattern could be a news agency that sends news updates to its subscribers.
// The news agency is the subject, and the subscribers are the observers.
// Whenever there is breaking news, the news agency sends the news update to all of its subscribers automatically.
var NewsAgency = /** @class */ (function () {
    function NewsAgency() {
        this.subscribers = [];
    }
    NewsAgency.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    NewsAgency.prototype.sendMessage = function (message) {
        this.subscribers.forEach(function (el) {
            el.receiveMessage(message);
        });
    };
    return NewsAgency;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this.name = name;
        this.name = name;
    }
    Subscriber.prototype.receiveMessage = function (message) {
        console.log("".concat(this.name, " receive a message = ").concat(message));
    };
    return Subscriber;
}());
var detik = new NewsAgency();
var james = new Subscriber("James");
var noah = new Subscriber("Noah");
detik.subscribe(james);
detik.subscribe(noah);
detik.sendMessage("BREAKING NEWS: Kami membuat kartu member versi terbaru");
