import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import User from 'src/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;  
  title = 'recipes';

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }
}
