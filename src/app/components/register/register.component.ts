import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    name:['', [Validators.required]],
    password:['', [Validators.required]],
    id:[0],
    address:['', [Validators.required]],
    mail:['', [Validators.required]]
  })
  isExist: boolean = false;
  isExistPartly: boolean = false;

  onSubmit(){
    this.userService.register(   
    new User(this.registerForm.value.name, this.registerForm.value.password, this.registerForm.value.id, this.registerForm.value.address, this.registerForm.value.mail))
    .subscribe(res=>{
      if(typeof(res) === 'object'){
        alert("kkk");
        this.router.navigate(['/all-recipes'])
      }      
      else if(res){
        this.isExistPartly=true;
        this.isExist=false;
      }
      else {
        this.isExist=true;
        this.isExistPartly=false;
      }
    })
  }


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
