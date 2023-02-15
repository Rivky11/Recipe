import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Output() logouthappened = new EventEmitter();

  logout()
  {
    this.userService.deleteCurrentUser();
    this.logouthappened.emit();
  }
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
