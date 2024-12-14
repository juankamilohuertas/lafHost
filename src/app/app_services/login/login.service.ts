import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IrequestApiCentauro } from '../../app_models/Sesion/requestLogin.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUser$?:string;
  
  constructor(private httpClient: HttpClient) {}
  private readonly _ApiCentauro = environment.apiCentauro;

  getApiCentauro(user: string, passworld: string) {
    return this.httpClient.post<IrequestApiCentauro>(`${this._ApiCentauro}`, {
      "usuario": user,
      "password": passworld,
    });
  }

  
}
