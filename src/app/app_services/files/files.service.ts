import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IfiltersActualizarDesdeArchivo, IfiltersActualizarIps } from '../../app_models/filter/search-and-filter.models';
import { catchError, map, of, retry, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private readonly _urlsApis = environment;
  constructor(private httpClient: HttpClient) {}
  
  /* GET ACTUALIZAR DB DESDE EL ARCHIVO */
  getApiFile() {
    return this.httpClient.get<IfiltersActualizarDesdeArchivo[]>(
      this._urlsApis.apiActualizarDb);
  }
  /* POST ACTUALIZAR EL ARCHIVO TXT */
  postApiFile() {
    return this.httpClient.post<IfiltersActualizarDesdeArchivo[]>(
      `${this._urlsApis.apiActualizarDb}/actualizarDesdeArchivo`,{});
  }
  /* GET OBTENER IPS DE DB ACTUALIZARIP*/
  getApiActualizarIp(){
    return this.httpClient.get<IfiltersActualizarIps[]>(this._urlsApis.apiActualizarIp);
  }
  /* POST DE DB ACTUALIZARIP */
  postApiActualizarIp(activosId: string){
    return this.httpClient.post<IfiltersActualizarIps[]>(this._urlsApis.apiActualizarIp,{
      "activosId": activosId,
      "direccionIp": "0.0.0.0"
    });
  }
  /* PUT DE DB ACTUALIZARIP */
  putApiActualizarIp(id:string,activosId: string, direccionIp: string){
    return this.httpClient.post<IfiltersActualizarIps[]>(this._urlsApis.apiActualizarIp+"/"+id,{
      "activosId": activosId,
      "direccionIp": direccionIp
    });
  }
  /* DELETE DE DB ACTUALIZARIP*/
  deleteApiActualizarIp(id: number){
    return this.httpClient.post<IfiltersActualizarIps[]>(`${this._urlsApis.apiActualizarIp}/${id}$`,{});
  }
}
