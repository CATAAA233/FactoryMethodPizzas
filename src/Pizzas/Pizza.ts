import { Cheese } from "../Ingredients/interfaces/Cheese.interface";
import { Clams } from "../Ingredients/interfaces/Clam.interface";
import { Dough } from "../Ingredients/interfaces/Dough.interface";
import { Peperoni } from "../Ingredients/interfaces/Peperoni.interface";
import { Sauce } from "../Ingredients/interfaces/Sauce.interface";
import { Veggies } from "../Ingredients/interfaces/Veggies.interface";

export abstract class Pizza {
    name:string="";
    dough: Dough ={};
    sauce: Sauce ={};
    veggies: Veggies =[];
    cheese: Cheese={};
    peperoni: Peperoni={};
    clam: Clams ={};
    toppings: Array<string> = [];

    abstract prepare(): void

    bake() {
        console.log("Bake for 25 minutes at 350");
    }
    cut() {
        console.log("Cutting the pizza into diagonal slices");
    }
    box() {
        console.log("Place pizza in official PizzaStore box");
    }

    setName(name:string){
        this.name = name
    }

    getName() {
        return this.name
    }

    toString(){

    }
}
