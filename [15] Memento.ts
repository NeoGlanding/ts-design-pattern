// The Memento design pattern is a behavioral pattern that allows an object to capture its internal state and store it externally,
// so that the object can be restored to that state later on.
// This pattern is useful when you need to implement an undo/redo functionality or when you need to save and restore the state of an object without violating its encapsulation.

// An analogy for the Memento pattern could be a game where you can save your progress at any time and then load that saved game later on.
// When you save the game, you capture the state of the game (e.g., the player's position, health, score, etc.) and store it externally (e.g., in a file).
// When you load the saved game, you restore the game to the state it was in when you saved it.

class Game {
  private level: number = 1;
  private score: number = 0;

  constructor() {}

  public nextLevel() {
    this.level++;
    this.score += 20;
  }

  public getInformation(): void {
    console.log(`Level ${this.level}, Score ${this.score}`);
  }

  public saveGame(): SaveGameMemento {
    return new SaveGameMemento(this.level, this.score);
  }

  public loadGame(memento: SaveGameMemento): void {
    this.level = memento.getLevel();
    this.score = memento.getScore();
    console.log("Game successfuly loaded");
  }
}

class SaveGameMemento {
  constructor(private level: number, private score: number) {
    this.level = level;
    this.score = score;
  }

  public getLevel(): number {
    return this.level;
  }

  public getScore(): number {
    return this.score;
  }
}

const residentEvil4 = new Game();
residentEvil4.nextLevel();
residentEvil4.nextLevel();
// residentEvil4.getInformation();
const re4Save: SaveGameMemento = residentEvil4.saveGame();

const residentEvil4_2 = new Game();
residentEvil4_2.getInformation();
residentEvil4_2.loadGame(re4Save);
residentEvil4_2.getInformation();
