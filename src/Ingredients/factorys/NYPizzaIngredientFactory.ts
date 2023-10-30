import { ReggianoCheese } from "../Cheeses/ReggianoCheese";
import { FreshClams } from "../Clams/FreshClams";
import { ThinCrustDough } from "../Doughs/ThinCrustDough";
import { SlicedPepperoni } from "../Peperonies/SlicedPepperoni";
import { Garlic } from "../Veggies/Garlic";
import { Mushroom } from "../Veggies/Mushroom";
import { Onion } from "../Veggies/Onion";
import { RedPepper } from "../Veggies/RedPepper";
import { Cheese } from "../interfaces/Cheese.interface";
import { Clams } from "../interfaces/Clam.interface";
import { Dough } from "../interfaces/Dough.interface";
import { Peperoni } from "../interfaces/Peperoni.interface";
import { PizzaIngredientFactory } from "../interfaces/PizzaIngredientFactory.interface";
import { Sauce } from "../interfaces/Sauce.interface";
import { Veggies } from "../interfaces/Veggies.interface";
import { MarinaraSauce } from "../sauces/MarinaraSauce";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    async createDough(): Promise<Dough> {
        return new ThinCrustDough();
    }
    
    async createSauce(): Promise<Sauce> {
        return new MarinaraSauce();
    }
    
    async createCheese(): Promise<Cheese> {
        return new ReggianoCheese();
    }
    
    createVeggies(): Veggies[] {
        const veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
        return veggies;
    }
    
    async createPeperoni(): Promise<Peperoni> {
        return new SlicedPepperoni();
    }
    
    async createClam(): Promise<Clams> {
        return new FreshClams();
    }

}