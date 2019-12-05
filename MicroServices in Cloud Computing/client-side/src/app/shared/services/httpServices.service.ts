import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AllHttpService {

   public head = new Headers({'content-type': 'application/json'});
   public baseUrl = 'https://3uql8oh3nj.execute-api.us-west-2.amazonaws.com/Prod/';
   constructor(private _http : Http){
   }

  login(passCode, email){
    let head = new Headers({'content-type': 'application/json', 'email': email, 'password': passCode});
    return this
    ._http
    .get(`${this.baseUrl}login`, {headers: head})
    .map((response: Response) => response.json());
  }

  orders(email){
    let head = new Headers({'content-type': 'application/json', 'email': email});
    return this
    ._http
    .get(`${this.baseUrl}orders`, {headers: head})
    .map((response: Response) => response.json());
  }

  cart(email){
    let head = new Headers({'content-type': 'application/json', 'email': email});
    return this
    ._http
    .get(`${this.baseUrl}cart`, {headers: head})
    .map((response: Response) => response.json());
  }

  validatecc(cc, expyear, expmonth, cvv){
    let head = new Headers({'content-type': 'application/json', 'cc': cc, 'expyear':expyear, 'expmonth':expmonth, 'cvv':cvv});
    return this
    ._http
    .get(`${this.baseUrl}validatecc`, {headers: head})
    .map((response: Response) => response.json());
  }
 
  
}