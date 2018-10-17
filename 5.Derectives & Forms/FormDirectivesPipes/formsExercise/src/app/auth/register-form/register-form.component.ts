import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/RegisterModel';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model: RegisterModel;

  constructor() { 
    this.model = new RegisterModel('', '','','','')
  }

  ngOnInit() {
  }

  register(){
    
  }
}
