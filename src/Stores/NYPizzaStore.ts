import { NYPizzaIngredientFactory } from "../Ingredients/factorys/NYPizzaIngredientFactory";
import { PizzaIngredientFactory } from "../Ingredients/interfaces/PizzaIngredientFactory.interface";
import { CheesePizza } from "../Pizzas/CheesePizza";
import { ClamPizza } from "../Pizzas/ClamPizza";
import { Pizza } from "../Pizzas/Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore{
    async createPizza(item:string): Promise<Pizza | null>{
        let pizza: Pizza | null = null;
        let ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();


        if(item ==="cheese"){
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza")
        }
        
        else if(item ==="clam"){
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza")
        }
        return pizza;

    }
}