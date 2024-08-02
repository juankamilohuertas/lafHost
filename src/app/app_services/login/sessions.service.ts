import { inject, Injectable } from '@angular/core';
import { IrequestApiCentauro } from '../../app_models/Sesion/requestLogin.models';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionsService {
  private readonly _ApiCentauro = environment.apiCentauro;
  httpClient = inject(HttpClient);
  constructor() {}
 
  getApiCentauro(user: string, passworld: string) {
    return this.httpClient.post<IrequestApiCentauro>(`${this._ApiCentauro}/api/Login`, {
      "usuario": user,
      "password": passworld,
    });
  }
}
