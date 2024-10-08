import { Routes } from '@angular/router';
import { DashboardComponent } from './app_component/dashboard/dashboard.component';
import { LoginComponent } from './app_component/login/login.component';
import { ListHostComponent } from './app_component/list-host/list-host.component';
import { authentication } from './guards/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {path: 'panel', redirectTo: '/panel/inicio', pathMatch: "full"},
  {
    path: 'panel',
    canActivate: [authentication],
    component: DashboardComponent,
    
    children: [
      { path: 'inicio', component: ListHostComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'prefix' },
];

