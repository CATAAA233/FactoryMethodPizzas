import { PizzaIngredientFactory } from "../Ingredients/interfaces/PizzaIngredientFactory.interface";
import { Pizza } from "./Pizza";

export class CheesePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;
    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}