import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });

  get UserName () {
    return this.loginForm.get('userName');
  }
  get Password () {
    return this.loginForm.get('password');
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.UserName.value);

    alert(this.UserName.value);

    console.log(this.Password.value);

    alert(this.Password.value);

    this.authService.login(this.UserName.value, this.Password.value);
  }
}
