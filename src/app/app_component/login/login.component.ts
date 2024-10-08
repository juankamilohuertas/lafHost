import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IrequestApiCentauro } from '../../app_models/Sesion/requestLogin.models';
import { LoginService } from '../../app_services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  private readonly _dataService = inject(LoginService);
  private readonly _router = inject(Router);
  user!: string;
  passworld!: string;
  userExpresion = /^\d+$/;
  passWorldExpresion = /^[\w!@#$%^&*()_+={}\[\]|;:',.?/`~\-]{1,8}$/;

  constructor() {}
  // INICIO DE SESION POR CLICK Y VALIDACION DE USUARIO
  startLogin() {
    //validando campos del inicio de sesion
    if (!this.userExpresion.test(this.user)) {
      alert('El usuario Solo Debe Contener Numeros de 0-9');
    } else if (!this.passWorldExpresion.test(this.passworld)) {
      alert('La contraseña debe tener como maximo 8 caracteres');
    } else {
      //recibiendo datos de la API centauro
      this._dataService
        .getApiCentauro(this.user, this.passworld)
        .subscribe((dataApi: IrequestApiCentauro) => {
          if (dataApi.result.usuario != undefined) {
            this._dataService.getUser$ = dataApi.result.usuario;
            if(typeof(dataApi.result) == 'object' && dataApi.token != null){
              localStorage.setItem("token",String(dataApi.token))
            }
            
            this._router.navigateByUrl('/panel');
          } else {
            alert('Usuario o Contraseña Invalido');
          }
        });
    }
  }
  // INICIO DE SESION CON LA TECLA ENTER
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.startLogin();
    }
  }
}
