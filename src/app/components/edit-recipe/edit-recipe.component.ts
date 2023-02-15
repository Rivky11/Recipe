import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import Recipe from 'src/models/Recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
onSubmit() {
}
  recipeId: number
  recipe: Recipe={
    Id: 0,
    Name: '',
    CategoryId: 0,
    PreparationTimeInMinute: 0,
    Level: 0,
    AddDate: undefined,
    Layers: [],
    Preparation: [],
    UserId: 0,
    Image: '',
    IsDisplay: false
  }
  
  recipeForm = this.fb.group({
    id :[this.recipe.Id],
    name :[this.recipe.Name] ,
    categoryId:[this.recipe.CategoryId], 
    preparationTimeInMinute:[this.recipe.PreparationTimeInMinute], 
    level :[this.recipe.Level],
    addDate :[this.recipe.AddDate],
    layers : [this.recipe.Layers],
    preparation :[this.recipe.Preparation],
    userId :[this.recipe.UserId],
    image :[this.recipe.Image],
    isDisplay :[this.recipe.IsDisplay]
 })

  constructor(private act: ActivatedRoute, private recipeService: RecipeService, public fb: FormBuilder) {
    this.act.params.subscribe(res=>{
      this.recipeId=+res['id'];})

   }

  ngOnInit(): void {

  }

}
