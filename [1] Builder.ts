class Motorcycle {
  constructor(
    private style: string,
    private brand: string,
    private ccs: number,
    private oil: string,
    private fuel: string
  ) {}

  public description() {
    console.log(
      `This is ${this.style} motorcycle from ${this.brand}, with ${this.ccs} it needs ${this.oil} oil and ${this.fuel} fuel`
    );
  }
}

class MotorcycleBuilder {
  private style: string = "";
  private brand: string = "";
  private ccs: number = 0;
  private oil: string = "";
  private fuel: string = "";
  private motorcycle: Motorcycle | null = null;

  public getStyle(): string {
    return this.style;
  }

  public setStyle(style: string): MotorcycleBuilder {
    this.style = style;
    return this;
  }

  public getBrand(): string {
    return this.brand;
  }

  public setBrand(brand: string): MotorcycleBuilder {
    this.brand = brand;
    return this;
  }

  public getCcs(): number {
    return this.ccs;
  }

  public setCcs(ccs: number): MotorcycleBuilder {
    this.ccs = ccs;
    return this;
  }

  public getOil(): string {
    return this.oil;
  }

  public setOil(oil: string): MotorcycleBuilder {
    this.oil = oil;
    return this;
  }

  public getFuel(): string {
    return this.fuel;
  }

  public setFuel(fuel: string): MotorcycleBuilder {
    this.fuel = fuel;
    return this;
  }

  public build(): Motorcycle {
    this.motorcycle = new Motorcycle(
      this.style,
      this.brand,
      this.ccs,
      this.oil,
      this.fuel
    );
    return this.motorcycle;
  }

  public getMotorcycle(): Motorcycle | null {
    return this.motorcycle;
  }
}

const myMotor = new MotorcycleBuilder()
  .setBrand("Honda")
  .setCcs(400)
  .setOil("Motul")
  .setFuel("Pertamax")
  .setStyle("Caferacer");

myMotor.build();

myMotor.getMotorcycle()?.description();
