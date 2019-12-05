
import { Router } from '@angular/router';
import { AllHttpService } from './../shared/services/httpServices.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { PipeTransform, Pipe } from '@angular/core';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  allOrders = []
  constructor(private _authenticate: AllHttpService, private _router: Router, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    this.ng4LoadingSpinnerService.show();
   }

   ngAfterViewInit() {
    this.ordersAll();
  }

  ordersAll(){
    let email = localStorage.getItem('email');
    this._authenticate.orders(email)
        .toPromise()
        .then((data: any) => {
            this.allOrders = data;
            this.ng4LoadingSpinnerService.hide();
        })
        .catch((err: Response) => {
                console.log('ERROR')
        });

  }

}
