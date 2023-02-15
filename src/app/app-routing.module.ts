import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';


const routes: Routes = [
  { path: 'all-recipes', component: AllRecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'recipe-details/:id', component: RecipeDetailsComponent},
  {path: 'edit-recipe', component: EditRecipeComponent}


];
@NgModule({
  declarations: [],

  imports: [
    CommonModule ,
    RouterModule.forRoot(routes)


  ]
})
export class AppRoutingModule { }
