import { AuthService } from './../shared/services/authService.service';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { CartComponent } from 'app/cart/cart.component';
import { ConfirmationComponent } from 'app/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full'},
      /*{ path: 'judges', component: JudgesComponent, canActivate: [AuthService]}*/
      { path: 'orders', component: OrdersComponent, canActivate: [AuthService]},
      { path: 'cart', component: CartComponent, canActivate: [AuthService]},
      { path: 'confirmation', component: ConfirmationComponent, canActivate: [AuthService]}
    ]
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
