import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  routeUrl = 'https://localhost:44336/api/user';
  currentUser: User;
  subsribeUser:BehaviorSubject<User> = new BehaviorSubject<User>(null);

  login(user: User){
   return this.http.post<boolean | User>(`${this.routeUrl}/Login`, user);
  }
  register(user: User){
    return this.http.post<boolean | User>(`${this.routeUrl}/Register`, user);
   }
  setCurrentUser(user: User){
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.subsribeUser.next(user);
  }
  deleteCurrentUser(){
    this.currentUser = null;
    this.subsribeUser.next(null);
    localStorage.removeItem("currentUser");
  }
  getCurrentUser(){
    if(!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
   return this.currentUser;
  }


  constructor(public http: HttpClient) { }
}
