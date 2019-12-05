import { AuthService } from './shared/services/authService.service';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: LayoutComponent, canActivate: [AuthService] }
  //{ path: 'app', component: LayoutComponent }
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes);