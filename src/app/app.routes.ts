import { Routes } from '@angular/router';
import { DashboardComponent } from './app_component/dashboard/dashboard.component';
import { LoginComponent } from './app_component/login/login.component';
import { OptConfigurationComponent } from './app_component/opt-configuration/opt-configuration.component';
import { ListHostComponent } from './app_component/list-host/list-host.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {path: 'panel', redirectTo: '/panel/inicio', pathMatch: "full"},
  {
    path: 'panel',
    component: DashboardComponent,
    
    children: [
      { path: 'inicio', component: ListHostComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'prefix' },
];
