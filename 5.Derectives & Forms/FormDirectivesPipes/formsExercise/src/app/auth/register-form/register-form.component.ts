import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/RegisterModel';
import { AuthService } from '../service/auth-service.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model: RegisterModel;
  loginFailed: boolean;
  errorMessage: string;
  constructor(private authServce: AuthService, private router: Router) { 
    this.model = new RegisterModel('', '','','','')
  }

  ngOnInit() {
  }

  register(){
    delete this.model['confirmPassword']
    this.authServce.register(this.model)
    .subscribe(data => {
      this.router.navigate(['/login'])
    }, 
    err => {
      this.loginFailed = true;
      this.errorMessage = err.error.description
    });
  }
}
