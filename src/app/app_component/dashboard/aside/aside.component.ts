import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../app_services/login/login.service';
import { BtncreateNewComponent } from '../../btn-create-new/btn-create-new.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink,BtncreateNewComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.sass',
})
export class AsideComponent implements OnInit {
  private readonly _dataService = inject(LoginService);
  loggedUser?: string;
  token = inject(Router);
  constructor() {}


  ngOnInit(): void {
    this.loggedUser = this._dataService.getUser$;
  }

  closeSession(){
    localStorage.removeItem("token");
    this.token.navigateByUrl("");
  }
}
