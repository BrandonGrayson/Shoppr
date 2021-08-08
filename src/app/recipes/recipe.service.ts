
import { EventEmitter } from '@angular/core';

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipeList: Recipe[] = [
        // create a new instance of recipe
        new Recipe(
            "First Recipe", 
            "This is my first recipe!", 
            "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg",
            [
                new Ingredient("Salmon", 1),
                new Ingredient("Mashed Potatoes", 2)
            ]
        )
      ]

    getRicepesMethod() {
        return this.recipeList.slice()
    }
}