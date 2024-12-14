import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';

@Injectable({
  providedIn: 'root',
})
export class DataFilterService {
  private readonly _urlsApis = environment;
  constructor(private httpClient: HttpClient) {}
  /* GET API ENLACES */
  getEnlacesApi() {
    return this.httpClient.get<IfiltersEnlaces[]>(this._urlsApis.apiEnlaces);
  }
  /* GET API SECCIONES */
  getSeccionesApi() {
    return this.httpClient.get<IfiltersSecciones[]>(this._urlsApis.apiSecciones);
  }
  /* GET API RESPONSABLES */
  getResponsablesApi() {
    return this.httpClient.get<IfiltersResponsables[]>(this._urlsApis.apiResponsables);
  }
  /* GET API TYPOHOST */
  getTypeHostApi(){
    return this.httpClient.get<IfiltersTipoHosts[]>(this._urlsApis.apiTipoHosts);
  }

  /* POST API ENLACES */
  postEnlacesApi(
    codigoActivo: string,
    idSeccion: number,
    idResponsable: number,
    idTipoHost: number,
    numeroSerie: string,
    descripcion: string,
    direccionIp: string,
    fecha: string
  ) {
    return this.httpClient.post<IfiltersEnlaces[]>(this._urlsApis.apiEnlaces, {
      codigoActivo: codigoActivo,
      idSeccion: idSeccion,
      idResponsable: idResponsable,
      idTipoHost: idTipoHost,
      numeroSerie: numeroSerie.toLocaleUpperCase(),
      descripcion: descripcion.toLocaleUpperCase(),
      direccionIp: direccionIp,
      fecha: fecha,
    });
  }
  /* POST API SECCIONES */
  postSeccionesApi(nombreSeccion: string) {
    return this.httpClient.post<IfiltersSecciones[]>(
      this._urlsApis.apiSecciones,
      {
        "nombreSeccion": nombreSeccion.toLocaleUpperCase()
      }
    );
  }
  /* POST API RESPONSABLES */
  postResponsablesApi(codigoCentauro:number, nombreResponsable: string, idSeccion: number) {
    return this.httpClient.post<IfiltersResponsables[]>(
      this._urlsApis.apiResponsables,
      {
        "codigoCentauro": codigoCentauro,
        "nombreResponsable": nombreResponsable.toLocaleUpperCase(),
        "idSeccion": idSeccion
      }
    );
  }
  /* POST API TYPOHOST */
  postTypeHostApi(nombreTipoHost: string) {
    return this.httpClient.post<IfiltersTipoHosts[]>(
      this._urlsApis.apiTipoHosts,
      {
        "nombreTipoHost": nombreTipoHost.toLocaleUpperCase()
      }
    );
  }
  /* PUT API ENLACES */
  putEnlacesApi(id:number,
    codigoActivo: string,
    idSeccion: number,
    idResponsable: number,
    idTipoHost: number,
    numeroSerie: string,
    descripcion: string,
    direccionIp: string,
    fecha: string){
    return this.httpClient.post<IfiltersEnlaces[]>(`${this._urlsApis.apiEnlaces}/${id}$`,{
      "id": id,
      "codigoActivo": codigoActivo,
      "idSeccion": idSeccion,
      "idResponsable": idResponsable,
      "idTipoHost": idTipoHost,
      "numeroSerie": numeroSerie.toLocaleUpperCase(),
      "descripcion": descripcion.toLocaleUpperCase(),
      "direccionIp": direccionIp,
      "fecha": fecha
    })
  }
  /* DELETE API ENLACES */
  deleteEnlacesApi(id:number){
    return this.httpClient.post(`${this._urlsApis.apiEnlaces}/${id}`,{});
  }
  /* ************************************************************************ */
  private _dataBehavior = new BehaviorSubject('');
  selectedFilterOptions$ = this._dataBehavior.asObservable();

  setBreadCrumb(newData: string) {
    this._dataBehavior.next(newData);
  }

}
