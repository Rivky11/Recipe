import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import Category from 'src/models/Category';
import Recipe from 'src/models/Recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}

  recipeForm = this.fb.group({
     id :[0],
     name :[''] ,
     categoryId:[0], 
     preparationTimeInMinute:[0], 
     level :[0],

     addDate :[new Date()],
     layers : this.fb.array([
      this.fb.group({
        components: this.fb.array([
         this.fb.group({
          component: [''],
         }), 
        ]),
        description: [''],
      })
     ]),
     preparation :[''],
     userId :[0],
     image :[''],
     isDisplay :[false]
  })


  categories: Category[]

  deleteLayer(index) {
    (this.recipeForm.get('layers') as FormArray).removeAt(index);
  }
  addLayer() {
    (this.recipeForm.get('layers') as FormArray).push(new FormControl({
      component: [''],
      description: [''],
    }))
  }

  submitLayer(){
   // let components=this.layerForm.value;
   // this.recipeForm['layer']+=components
   // this.recipeForm.reset(this.recipeForm.value);
  }
  addInput(){
    const input: HTMLParagraphElement = this.renderer.createElement('input');
    input.addEventListener('focus', ()=>{this.addInput()});
    input.setAttribute('formControlName','component')
    this.renderer.appendChild(document.getElementById('preparation'), input);
  }


  constructor(private fb: FormBuilder, private categoryService: CategoryService, private recipeService: RecipeService,   private renderer: Renderer2,
   private router: Router ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res;
      })
  
    }
}
