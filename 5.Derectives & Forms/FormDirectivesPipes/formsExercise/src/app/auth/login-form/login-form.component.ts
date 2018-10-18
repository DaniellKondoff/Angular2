import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/LoginModel';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: LoginModel
  loginFailed: boolean;
  errorMessage: string
  constructor(private authServce: AuthService, private router: Router) {
    this.model = new LoginModel('','')
   }

  ngOnInit() {
  }

  login(){
    this.authServce.login(this.model).subscribe(data => {
      this.successfulLogin(data)
    },
  err => {
    this.loginFailed = true,
    this.errorMessage = err.error.description;
  })
  }

  successfulLogin(data){
    this.authServce.auththoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.router.navigate([''])
  }
}
