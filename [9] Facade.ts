// Basically facade is just simplifying operation from different classes

class Engine {
  constructor() {}

  public engineStart() {
    console.log("Engine started");
  }

  public engineStop() {
    console.log("Engine stopped");
  }
}

class Gear {
  public operate() {
    console.log("Gear operating");
  }

  public stop() {
    console.log("Gear stop");
  }
}

class Car {
  constructor(private engine: Engine, private gear: Gear) {}

  public start() {
    this.engine.engineStart();
    this.gear.operate();
    console.log("Car started");
  }

  public stop() {
    this.engine.engineStop();
    this.gear.stop();
    console.log("Car Stopped");
  }
}

const myEngine = new Engine();
const myGear = new Gear();

const myCar = new Car(myEngine, myGear);
// myCar.start();
myCar.start();
