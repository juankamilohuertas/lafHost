import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../app_services/login/login.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.sass',
})
export class AsideComponent implements OnInit {
  private readonly _dataService = inject(LoginService)
  loggedUser?:string;
  constructor(){ 
    
  }

  ngOnInit(): void {
    this.loggedUser = this._dataService.getUser$;
  }
}
