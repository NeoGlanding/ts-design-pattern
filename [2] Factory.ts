type TVespaOil = "Vespa without side oil" | "Vespa without side oil";
type TMaticCVT = "Premium CVT" | "Standard CVT";
type TSportGear = "Premium Gear" | "Standard Gear";

class MotorcycleFactory {
  constructor(
    protected brand: string,
    protected style: string,
    protected options: string
  ) {
    this.brand = brand;
    this.style = style;
    this.options = options;
  }

  public static createVespa(oilType: TVespaOil) {
    return new this("Vespa", "Scooter", oilType);
  }

  public static createMatic(brand: string, cvtType: TMaticCVT) {
    return new this(brand, "Scooter", cvtType);
  }

  public static createSport(brand: string, gearType: TSportGear) {
    return new this(brand, "Fairing Motor", gearType);
  }

  public getInformation(): void {
    console.log(`
        Brand: ${this.brand}
        Style: ${this.style}
        Additional: ${this.options}
    `);
  }
}

const myMatic = MotorcycleFactory.createMatic("Honda", "Premium CVT");
myMatic.getInformation();
