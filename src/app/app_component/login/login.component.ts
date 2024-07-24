import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionsService } from '../../app_services/login/sessions.service';
import { requestLogin } from '../../app_models/Sesion/requestLogin.models';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  user:string ="";
  passworld:string ="";

  _requestLogin:requestLogin ={
    usuario:this.user,
    password:this.passworld
  }

  constructor(
    private _sessions : SessionsService
  ){}
  async startLogin(){
     const respuesta = await this._sessions.login(this._requestLogin);
     console.log("test respuesta api"+respuesta.result);    
     if( respuesta.httpStatus == 200)
     {
       window.alert(respuesta.result); 
     }
    }

}
