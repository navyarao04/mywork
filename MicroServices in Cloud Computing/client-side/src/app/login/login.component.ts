import { AllHttpService } from './../shared/services/httpServices.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg='';
  constructor(  private _authenticate:AllHttpService,
         private _router: Router,) {
              if(localStorage.getItem('email')){
                 _router.navigate(['app']);
             }
             }

  ngOnInit() {
  }

    login(passCode, email) {
        if(passCode.trim().length == 0 || email.trim().length == 0){
            this.errorMsg = "Please enter emailid and the password";
                    setTimeout(function() {
                        this.errorMsg = '';
                    }.bind(this), 6000);
        }
        else{
            this._authenticate
            .login(passCode, email)
            .toPromise()
            .then((data: any) => {
                if(data){
                    console.log(data['Items'][0]);
                    localStorage.setItem('fname', data['Items'][0]['firstName']);
                    localStorage.setItem('lname', data['Items'][0]['lastName']);
                    localStorage.setItem('email', data['Items'][0]['email']);
                    this._router.navigate(['app']);
                }
                else{
                    this.errorMsg = "login unsuccessful";
                    setTimeout(function() {
                        this.errorMsg = '';
                    }.bind(this), 6000);
                }
            })
            .catch((err: Response) => {
                    this.errorMsg = "login unsuccessful";
                    setTimeout(function() {
                        this.errorMsg = '';
                    }.bind(this), 6000);
            });

        }
    }
}
