import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import Category from 'src/models/Category';
import Recipe from 'src/models/Recipe';
import User from 'src/models/User';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeCategoryName=''
  recipeId:number

  recipe: Recipe={
    Id: 0,
    Name: '',
    CategoryId: 0,
    PreparationTimeInMinute: 0,
    Level: 0,
    AddDate: new Date(),
    Layers: [],
    Preparation: [],
    UserId: 0,
    Image: '',
    IsDisplay: false
  }

  currentUser: User
  constructor(private act:ActivatedRoute, private recipeService: RecipeService, private userService: UserService, private categoryService: CategoryService) { 

  }

  ngOnInit(): void {
    this.act.params.subscribe(res=>{
      this.recipeId=+res['id'];
      this.recipeService.getRecipeById(this.recipeId).subscribe(res=>{
        alert('hgf')
        this.recipe = res;
      })
    }
    )
    this.categoryService.getCategoryById(this.recipeId).subscribe(res=>{
      this.recipeCategoryName=res.Name
    })


    
  
    this.currentUser = this.userService.getCurrentUser()

  }

}
