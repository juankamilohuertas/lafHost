import { Routes } from '@angular/router';
import { DashboardComponent } from './app_component/dashboard/dashboard.component';
import { LoginComponent } from './app_component/login/login.component';

export const routes: Routes = [
    {path: "panel", component: DashboardComponent},
    {path: "**", component: LoginComponent}
];
