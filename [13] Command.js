"use strict";
// Command basically just encapsulate the actual logic into a method
var CreateCardCommand = /** @class */ (function () {
    function CreateCardCommand() {
    }
    CreateCardCommand.prototype.execute = function (body) {
        console.log("Creating a card");
    };
    return CreateCardCommand;
}());
var createCard = new CreateCardCommand();
createCard.execute({});
