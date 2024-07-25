import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './app_component/dashboard/dashboard.component';
import { SearchAndFilterComponent } from './app_component/search-and-filter/search-and-filter.component';
import { LoginComponent } from './app_component/login/login.component';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,SearchAndFilterComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'lafHost';
}
