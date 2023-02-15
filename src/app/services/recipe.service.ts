import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencyCode } from '@angular/common';
import Recipe from 'src/models/Recipe';
import Category from 'src/models/Category';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) { }
  routeUrl = 'https://localhost:44336/api/recipe';

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.routeUrl}/GetAllRecipes`);
  }
  getRecipeById(id: number){
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipeById/${id}`);
  }


    
  }
  
