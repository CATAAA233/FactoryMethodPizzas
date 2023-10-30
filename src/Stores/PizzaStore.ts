import { Pizza } from "../Pizzas/Pizza";

export abstract class PizzaStore {

    async orderPizza(type: string) {
        let pizza: Pizza;

        let pizzacreated = await this.createPizza(type)
        if (pizzacreated) {
            pizza = pizzacreated
            pizza.prepare();
        }
        else console.log('pizza doesnt exist in menu')
    }

    abstract createPizza(type: string): Promise<Pizza | null>;
}