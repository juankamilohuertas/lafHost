import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
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
      numeroSerie: numeroSerie,
      descripcion: descripcion,
      direccionIp: direccionIp,
      fecha: fecha,
    });
  }
  /* POST API SECCIONES */
  postSeccionesApi(nombreSeccion: string) {
    return this.httpClient.post<IfiltersSecciones[]>(
      this._urlsApis.apiSecciones,
      {
        "nombreSeccion": nombreSeccion
      }
    );
  }
  /* POST API RESPONSABLES */
  postResponsablesApi(nombreResponsable: string, idSeccion: number) {
    return this.httpClient.post<IfiltersResponsables[]>(
      this._urlsApis.apiResponsables,
      {
        "nombreResponsable": nombreResponsable,
        "idSeccion": idSeccion
      }
    );
  }

  /* ************************************************************************ */
  private _dataBehavior = new BehaviorSubject('');
  selectedFilterOptions$ = this._dataBehavior.asObservable();

  setBreadCrumb(newData: string) {
    this._dataBehavior.next(newData);
  }

}
