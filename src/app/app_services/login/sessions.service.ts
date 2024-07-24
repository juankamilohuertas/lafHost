import { Injectable } from '@angular/core';
import { requestApiCentauro, requestLogin } from '../../app_models/Sesion/requestLogin.models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { parse } from 'path';
import internal from 'stream';


@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private readonly ApiCentauro = environment.apiCentauro;
constructor(){}

  async login(requestSession: requestLogin):Promise<requestApiCentauro>{
    const apiData = await fetch(this.ApiCentauro+"/api/SISMO01/IniciarSesion",
      {
        method: "POST",
        body: JSON.stringify({
          "usuario": requestSession.usuario,         
          "password": requestSession.password     
         }),
        headers:{"Content-type":"application/json"}
    });
    const resApiData = await apiData.json();
    return resApiData as requestApiCentauro;
  }

  test():number{
    return 1;
  }
}
