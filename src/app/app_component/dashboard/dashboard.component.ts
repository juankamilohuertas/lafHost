import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchAndFilterComponent } from "../search-and-filter/search-and-filter.component";
import { NotificationsComponent } from './notifications/notifications.component';
import { AsideComponent } from "./aside/aside.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,AsideComponent, SearchAndFilterComponent, NotificationsComponent, AsideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {

}
