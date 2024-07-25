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

  async login(user:string,passworld:string):Promise<requestApiCentauro>{
    const apiData = await fetch(this.ApiCentauro+"/api/Login",
      {
        method: "POST",
        body: JSON.stringify({
          "usuario": user,         
          "password": passworld     
         }),
        headers:{"Content-type":"application/json"}
    });
    const resApiData = await apiData.json();
   console.log(resApiData)
    return resApiData as requestApiCentauro;
  }

}
