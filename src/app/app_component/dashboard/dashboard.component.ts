import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchAndFilterComponent } from "../search-and-filter/search-and-filter.component";
import { AsideComponent } from "./aside/aside.component";
import { RecentSearchesComponent } from '../recent-searches/recent-searches.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,AsideComponent, SearchAndFilterComponent,RecentSearchesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {

}
