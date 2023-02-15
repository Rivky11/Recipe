import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Category from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  routeUrl = 'https://localhost:44336/api/category';

  getAllCategories() {
    return this.http.get<Category[]>(`${this.routeUrl}/GetAllCategories`);
  }
  getCategoryById(id: number)
  {
    return this.http.get<Category>(`${this.routeUrl}/GetCategoryById/${id}`);
  }

  constructor(private http: HttpClient) { }
}
