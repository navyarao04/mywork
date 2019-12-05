import { LoaderComponent } from './../loader/loader.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
/*import { JudgesComponent } from '../judges/judges.component';*/
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

//import { LayoutRoutingModule } from './layout-routing.module';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    Ng4LoadingSpinnerModule,
    NgbModule.forRoot()
  ],
  declarations: [

  LoaderComponent,

  CartComponent,

  OrdersComponent,

  ConfirmationComponent],
  providers: []
})

export class LayoutModule {}
