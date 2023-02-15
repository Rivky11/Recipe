import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Recipe from 'src/models/Recipe';
import User from 'src/models/User';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {
@Input()
 recipe:Recipe;
 currentUser: User
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.subsribeUser.subscribe((user: User) => {
      this.currentUser = user;
    })
  }

}
