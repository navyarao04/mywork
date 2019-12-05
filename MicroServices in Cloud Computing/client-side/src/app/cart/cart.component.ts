import { Router } from '@angular/router';
import { AllHttpService } from './../shared/services/httpServices.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { PipeTransform, Pipe } from '@angular/core';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  flag = 0
  allCartOrders = []
  errorMsg = ''
  total = 0
  itemCount = 0
  constructor(private _authenticate: AllHttpService, private _router: Router, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    this.ng4LoadingSpinnerService.show();
   }

   ngAfterViewInit() {
    this.cartordersAll();
  }

  checkout(f){
    console.log(f);
    this.flag = f
  }
  cartordersAll(){

    let email = localStorage.getItem('email');
    this._authenticate.cart(email)
        .toPromise()
        .then((data: any) => {
          //console.log(data);
            this.allCartOrders = data;
            this.ng4LoadingSpinnerService.hide();
            for(let i in data){
              this.total = this.total + parseFloat(data[i]['price']);
              this.itemCount = this.itemCount + 1
            }
            this.total = this.total + 2.50 + 3.24
            this.total = parseFloat(this.total.toFixed(2));
        })
        .catch((err: Response) => {
                console.log('ERROR')
        });

  }

  validatecc(cc, expyear, expmonth, cvv){
    this._authenticate.validatecc(cc, expyear, expmonth, cvv)
        .toPromise()
        .then((data: any) => {
          console.log(data);
            this.errorMsg = data;
            setTimeout(function() {
              this.errorMsg = '';
          }.bind(this), 6000);
            if(data == 'Valid Credit Card'){
              this._router.navigateByUrl('/app/confirmation');
            }
        })
        .catch((err: Response) => {
                console.log('ERROR')
        });
  }

}
