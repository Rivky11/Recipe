import { Component, OnInit } from '@angular/core';
import {RecipeService } from 'src/app/services/recipe.service';
import Recipe from 'src/models/Recipe';


@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
  selectedCategory=0
  arrRecipes: Recipe[];
  constructor(public recipesService: RecipeService) { 
    this.recipesService.getAllRecipes().subscribe(ok=>{
      this.arrRecipes=ok;
      console.log(this.arrRecipes);
    })
  }
  setSelectedCategory(id){
    this.selectedCategory=id;
  }


  ngOnInit(): void {
  }

}
