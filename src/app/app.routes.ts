import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './app_component/dashboard/dashboard.component';
import { LoginComponent } from './app_component/login/login.component';
import { SearchAndFilterComponent } from './app_component/search-and-filter/search-and-filter.component';
import { OptConfigurationComponent } from './app_component/opt-configuration/opt-configuration.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {path: 'panel', redirectTo: '/panel/inicio', pathMatch: "full"},
  {
    path: 'panel',
    component: DashboardComponent,
    
    children: [
      { path: 'inicio', component: SearchAndFilterComponent },
      { path: 'configuration', component: OptConfigurationComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'prefix' },
];
