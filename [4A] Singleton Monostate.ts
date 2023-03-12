// The Monostate pattern is a variation of the Singleton pattern that achieves the same goal of having a single instance of a class,
// but with a different implementation approach.

// In the Monostate pattern,
// all instances of a class share the same state, which is stored in static member variables.
// This means that any changes to the state made by one instance are visible to all other instances of the class

class Monostate {
  private static monoState: string = "Default Value";

  public get getState() {
    return Monostate.monoState;
  }

  public set setState(value: string) {
    Monostate.monoState = value;
  }
}

const firstInstance = new Monostate();
const secondInstance = new Monostate();

console.log(secondInstance.getState);

firstInstance.setState = "Ezzet brother";

console.log(secondInstance.getState);
