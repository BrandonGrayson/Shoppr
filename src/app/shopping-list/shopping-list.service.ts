import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
    new Ingredient("Sweet Potatoes", 5),
    new Ingredient("Cherries", 100)
  ]

  getIngedients() {
      return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice())
  }
}