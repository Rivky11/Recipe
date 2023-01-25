import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { PipesPipe } from './pipes/stars.pipe';
import { DatePipe } from './pipes/time.pipe';
import { FilterRecipiesComponent } from './components/filter-recipies/filter-recipies.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { MatInputModule } from '@angular/material/input';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    AllRecipeComponent,
    SmallRecipeComponent, 
    PipesPipe,
    DatePipe,
    FilterRecipiesComponent,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   MatSlideToggleModule,
   ReactiveFormsModule,
   AppRoutingModule,
   RouterModule,
   FormsModule,
   MatInputModule,
   BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
