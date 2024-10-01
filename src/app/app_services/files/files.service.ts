import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfiltersActualizarDesdeArchivo } from '../../app_models/filter/search-and-filter.models';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private readonly _urlsApis = environment;
  constructor(private httpClient: HttpClient) {}

  /* POST API FILE */
  /* postApiFile(codigoActivo: string,nombreSeccion: string,nombreResponsable: string,nombreTipoHost: string,numeroSerie: string,descripcion: string,direccionIp: string,fecha: string){
    this.httpClient.post(this._urlsApis.apiActualizarDb,{
      "codigoActivo": codigoActivo,
      "nombreSeccion": nombreSeccion,
      "nombreResponsable": nombreResponsable,
      "nombreTipoHost": nombreTipoHost,
      "numeroSerie": numeroSerie,
      "descripcion": descripcion,
      "direccionIp": direccionIp,
      "fecha": fecha
    }).subscribe();
  } */

  /* ACTUALIZAR DB DESDE EL ARCHIVO */
  postApiFile(){
    return this.httpClient.post<IfiltersActualizarDesdeArchivo[]>(this._urlsApis.apiActualizarDb,{});
  }
}
