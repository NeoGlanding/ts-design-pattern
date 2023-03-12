interface IAddressArgument {
  streetName: string;
  postalCode: string;
  city: string;
  country?: string;
}

class Address {
  constructor(
    public streetName: string,
    public city: string,
    public country: string | undefined,
    public postalCode: string
  ) {
    this.streetName = streetName;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
  }

  public static createAddress(information: IAddressArgument) {
    return new this(
      information.streetName,
      information.city,
      information.country,
      information.postalCode
    );
  }

  private static generateAddressPerCountryFunction(country: string) {
    return function (information: IAddressArgument) {
      return new Address(
        information.streetName,
        information.city,
        country,
        information.postalCode
      );
    };
  }

  public static generateIndonesianAddress =
    this.generateAddressPerCountryFunction("Indonesia");

  public static generateSingaporeAddres =
    this.generateAddressPerCountryFunction("Singapore");
}

class Person {
  constructor(
    protected name: string,
    protected age: number,
    protected address: Address
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setAge(age: number): void {
    if (age < 0) throw new Error("Age should be same or more than 0");
    this.age = age;
  }

  public setAddress(address: Address): void {
    this.address = address;
  }

  public introduceMyself(): void {
    console.log(
      `Hi my name is ${this.name}, I am ${this.age} and here's my address :
      ${this.address.streetName}, ${this.address.city}, ${this.address.country} ${this.address.postalCode}
      `
    );
  }

  public deepCopy() {
    return new Person(this.name, this.age, Address.createAddress(this.address));
  }
}

const prototypeMan = new Person(
  "Prototype",
  0,
  Address.generateIndonesianAddress({
    streetName: "Mandor Sanun",
    postalCode: "8585858",
    city: "Kab. Bogor",
  })
);

const ihsan = prototypeMan.deepCopy();
ihsan.setName("Ihsan");
ihsan.setAge(20);
ihsan.setAddress(
  Address.generateIndonesianAddress({
    streetName: "Jalan Roti Bakar",
    postalCode: "485858",
    city: "Depok",
  })
);

const brian = prototypeMan.deepCopy();
brian.setName("Brian");
brian.setAge(14);
brian.setAddress(
  Address.generateSingaporeAddres({
    streetName: "Ubi Avenue Rd",
    postalCode: "448585",
    city: "Singapore",
  })
);

console.log(ihsan);
console.log(brian);
