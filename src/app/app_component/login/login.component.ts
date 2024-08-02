import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionsService } from '../../app_services/login/sessions.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
  providers:[SessionsService]
})
export class LoginComponent implements OnInit{
  private readonly _dataService = inject(SessionsService)
  user!:string;
  passworld!:string;
  
  constructor(){}

  startLogin(){
    return this._dataService.getApiCentauro(this.user,this.passworld).subscribe(v=>{
      console.log(v)
    })
  }
  ngOnInit(): void {
    this.startLogin
  }
  


  
  

}
