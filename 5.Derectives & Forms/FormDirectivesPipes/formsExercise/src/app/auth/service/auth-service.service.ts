import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterModel } from '../../models/RegisterModel';
import { LoginModel } from '../../models/LoginModel';

const appKey = "kid_SyN1588jm";
const appSecret = "62ab2721457c4e5b8400b2046618062f";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {

  private currentAuthtoken : string;
  constructor(private httpClient: HttpClient) { }

  private createAuthHeaders(type : string) : HttpHeaders {
    if(type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else{
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }

  login(loginModel :LoginModel) {
    return  this.httpClient.post(loginUrl,
    JSON.stringify(loginModel),
    {
    headers: this.createAuthHeaders('Basic')
    })
  }

  register(registerModel :RegisterModel) {
    return  this.httpClient.post(registerUrl,
    JSON.stringify(registerModel),
    {
    headers: this.createAuthHeaders('Basic')
    })
  }

  logout(){
    return this.httpClient.post(logoutUrl,
    {},
    {
    headers: this.createAuthHeaders('Kinvey')
    })
  }

  checkIfLoggedIn() {
    return this.currentAuthtoken === localStorage.getItem('authtoken')
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set auththoken(value: string) {
    this.currentAuthtoken = value;
  }
}
