import { Cheese } from "./Cheese.interface";
import { Clams } from "./Clam.interface";
import { Dough } from "./Dough.interface";
import { Peperoni } from "./Peperoni.interface";
import { Sauce } from "./Sauce.interface";
import { Veggies } from "./Veggies.interface";

export interface PizzaIngredientFactory{
    createDough: ()=> Dough
    createSauce: ()=> Sauce
    createCheese: ()=> Cheese
    createVeggies: ()=> Veggies[]
    createPeperoni: ()=> Peperoni
    createClam: ()=> Clams

    
}