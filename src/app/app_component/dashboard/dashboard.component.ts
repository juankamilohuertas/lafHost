import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BtncreateNewComponent } from '../btn-create-new/btn-create-new.component';
import { AsideComponent } from './aside/aside.component';
import { RecentSearchesComponent } from '../recent-searches/recent-searches.component';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { Router, RouterOutlet } from '@angular/router';
import { OptConfigurationComponent } from '../opt-configuration/opt-configuration.component';
import { LoginService } from '../../app_services/login/login.service';
import { BtnCloseOrOpenComponent } from '../btn-close-or-open/btn-close-or-open.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    BreadCrumbComponent,
    BtncreateNewComponent,
    RecentSearchesComponent,
    OptConfigurationComponent,
    BtnCloseOrOpenComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent{
  private readonly _dataService = inject(LoginService);
  private readonly _router = inject(Router);
  constructor() {
    /* this._dataService.getUser$ == undefined?this._router.navigateByUrl("login"):undefined; */
  }
  
  

  

}
