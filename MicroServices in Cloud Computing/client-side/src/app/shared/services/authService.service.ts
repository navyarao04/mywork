import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  public baseUrl = 'https://api.cmp.io/dma/';
  authstatus: boolean;
  constructor(
    private _http : Http,
    private _router : Router
  ) { }

  canActivate(){

      if(localStorage.getItem('email'))
      {
            return true;
      }
      else
      {
        this._router.navigateByUrl('/login');
      }
  }

}
