import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Category from 'src/models/Category';

@Component({
  selector: 'app-filter-recipies',
  templateUrl: './filter-recipies.component.html',
  styleUrls: ['./filter-recipies.component.css']
})
export class FilterRecipiesComponent implements OnInit {

  arrCategories: Category[];

  constructor(public categoryService: CategoryService) { 

  }
  @Output() filterCatChange = new EventEmitter();
  selectedCat:number;
  categories: Category[];
  filterByCategory()
  {
    this.filterCatChange.emit(this.selectedCat);
  }
  ngOnInit(): void {
        this.categoryService.getAllCategories().subscribe(res=>{
     this.categories=res;
    })
  }


}
