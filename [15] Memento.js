"use strict";
// The Memento design pattern is a behavioral pattern that allows an object to capture its internal state and store it externally,
// so that the object can be restored to that state later on.
// This pattern is useful when you need to implement an undo/redo functionality or when you need to save and restore the state of an object without violating its encapsulation.
// An analogy for the Memento pattern could be a game where you can save your progress at any time and then load that saved game later on.
// When you save the game, you capture the state of the game (e.g., the player's position, health, score, etc.) and store it externally (e.g., in a file).
// When you load the saved game, you restore the game to the state it was in when you saved it.
var Game = /** @class */ (function () {
    function Game() {
        this.level = 1;
        this.score = 0;
    }
    Game.prototype.nextLevel = function () {
        this.level++;
        this.score += 20;
    };
    Game.prototype.getInformation = function () {
        console.log("Level ".concat(this.level, ", Score ").concat(this.score));
    };
    Game.prototype.saveGame = function () {
        return new SaveGameMemento(this.level, this.score);
    };
    Game.prototype.loadGame = function (memento) {
        this.level = memento.getLevel();
        this.score = memento.getScore();
        console.log("Game successfuly loaded");
    };
    return Game;
}());
var SaveGameMemento = /** @class */ (function () {
    function SaveGameMemento(level, score) {
        this.level = level;
        this.score = score;
        this.level = level;
        this.score = score;
    }
    SaveGameMemento.prototype.getLevel = function () {
        return this.level;
    };
    SaveGameMemento.prototype.getScore = function () {
        return this.score;
    };
    return SaveGameMemento;
}());
var residentEvil4 = new Game();
residentEvil4.nextLevel();
residentEvil4.nextLevel();
// residentEvil4.getInformation();
var re4Save = residentEvil4.saveGame();
var residentEvil4_2 = new Game();
residentEvil4_2.getInformation();
residentEvil4_2.loadGame(re4Save);
residentEvil4_2.getInformation();
