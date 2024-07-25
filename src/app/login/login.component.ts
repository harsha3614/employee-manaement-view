import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: any;
  password: any;
  constructor( public router: Router){
    }
  login(){
    console.log("Login Component");
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl("/home")

    }


}
