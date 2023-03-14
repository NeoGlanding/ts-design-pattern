// The Composite design pattern is a structural design pattern that allows you to compose objects into tree-like structures to represent part-whole hierarchies.
// With this pattern,
// you can create a single object or a group of objects in the same way,
// treating them as a single entity.

// In this pattern,
// there are two types of objects: composite and leaf.
// The composite object is an object that has one or more child objects.
// The leaf object is an object that doesn't have any child objects. The composite object has a method to add, remove, or get child objects.

interface Component {
  name: string;

  operation: () => any;
}

class ProductLeaf implements Component {
  constructor(public name: string, private price: number) {
    this.price = price;
    this.name = name;
  }

  operation() {
    console.log(`${this.name} operated`);
  }
}

class ProductComposite implements Component {
  private products: Component[] = [];

  constructor(public name: string) {
    this.name = name;
  }

  operation() {
    console.log(`Composite ${this.name} operation`);
  }

  addToComposite(product: Component) {
    this.products.push(product);
  }

  getComopositeList() {
    this.products.forEach((el) => console.log(el));
  }
}

const samsung = new ProductLeaf("Samsung Product", 5000);
const oppo = new ProductLeaf("OPPO Product", 1000);

const phoneComposite = new ProductComposite("Phone");
phoneComposite.addToComposite(samsung);
phoneComposite.addToComposite(oppo);
// phoneComposite.getComopositeList();

const shopComposite = new ProductComposite("Antara shop");
shopComposite.addToComposite(phoneComposite);

shopComposite.getComopositeList();
