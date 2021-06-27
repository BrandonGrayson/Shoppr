import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Sweet Potatoes", 5),
    new Ingredient("Cherries", 100)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    // push our new ingredient to the ingredient array
    this.ingredients.push(ingredient)
  }
}
