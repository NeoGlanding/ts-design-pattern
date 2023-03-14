// The Decorator design pattern is like adding toppings to a pizza.
// Imagine you have a basic cheese pizza, and you want to add some extra toppings to it like mushrooms, onions, and pepperoni.
// Each topping is like a decorator that adds extra flavor to the pizza,
// without changing the pizza's basic cheese flavor. You can add as many toppings as you like,
// and they can be added or removed at any time without changing the pizza itself.

interface IFood {
  taste: string;
  getName: () => any;
}

// Base Class
class Pizza implements IFood {
  protected name: string = "Pizza";

  constructor(public taste: string) {
    this.taste = taste;
  }

  public eat() {
    console.log(`Eating Pizza`);
  }
  public getName(): string {
    return this.name;
  }
}

// Topping Class
abstract class Topping implements IFood {
  public taste: string = "";
  constructor(protected foods: IFood) {
    this.foods = foods;
    this.taste = this.foods.taste;
  }

  getName() {
    return "Topping";
  }
}

class MushroomToppings extends Topping {
  constructor(protected foods: IFood) {
    super(foods);
  }

  public desc() {
    console.log(`A ${this.foods.getName()} with MushroomsTopping`);
  }
}

const plainPizza = new Pizza("Cheesy");
const mushroomsPizza = new MushroomToppings(plainPizza);
mushroomsPizza.desc();
