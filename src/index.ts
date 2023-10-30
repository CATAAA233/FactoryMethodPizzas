import { NYPizzaStore } from "./Stores/NYPizzaStore";
import { PizzaStore } from "./Stores/PizzaStore";

const nyPizzaStore: PizzaStore = new NYPizzaStore();
nyPizzaStore.orderPizza('clam')