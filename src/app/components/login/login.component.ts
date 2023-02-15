import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    name:[''],
    password:['']
  })
  isWrongPassword: boolean=false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router  ) { }
  onSubmit(){
    this.userService.login(new User(this.loginForm.value.name,this.loginForm.value.password))
    .subscribe(res=>{
      if(typeof(res) === 'object')
        this.userService.setCurrentUser(res);
      else if(res)
        this.isWrongPassword=true
      else 
        this.router.navigate(['/register']);
    })
  }
  ngOnInit(): void {
  }

}
