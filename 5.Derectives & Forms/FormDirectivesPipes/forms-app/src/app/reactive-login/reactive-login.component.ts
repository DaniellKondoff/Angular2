import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControlName, FormControl, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  form = new FormGroup({
    "currentPass": new FormControl('', [Validators.required, Validators.minLength(2)]),
    "newPass" : new FormControl(''),
    "confirmPass": new FormControl('')
  })
  currentPass = 123
  constructor() { }

  ngOnInit() {
  }

  log(){
    console.log(this.form.value)
    if(this.form.get('currentPass').value != this.currentPass){
        alert("password is wrong")
    }
    if(this.form.get('newPass').value != this.form.get('confirmPass')){
      alert("password doe not mach")
    }
  }
}
