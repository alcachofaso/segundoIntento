import { Component, OnInit } from '@angular/core';
import { AutenticathorService } from "../../services/autenticathor.service";

import { Form } from '@angular/forms';




import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email: string;
  password: string;

  constructor(public authService: AutenticathorService) {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
