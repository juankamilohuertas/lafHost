import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IfiltersActivosFijosManuales } from '../../app_models/filter/search-and-filter.models';

@Injectable({
  providedIn: 'root',
})
export class DataFilterService {
  private readonly _urlsApis = environment;
  constructor(private httpClient: HttpClient) {}
  /* GET API ActivosFijosManuales */
  getActivosFijosManualesApi() {
    return this.httpClient.get<IfiltersActivosFijosManuales[]>(
      this._urlsApis.apiActivosFijosManuales
    );
  }

  /* POST API ActivosFijosManuales */
  postActivosFijosManualesApi(
    codigoActivo: string,
    nombreSeccion: string,
    codigoNomina: string,
    nombreResponsable: string,
    nombreTipoHost: string,
    numeroSerie: string,
    descripcion: string,
    direccionIp: string,
    fecha: string,
    estado: string
  ) {
    return this.httpClient.post<IfiltersActivosFijosManuales[]>(
      this._urlsApis.apiActivosFijosManuales,
      {
        codigoActivo: codigoActivo,
        nombreSeccion: nombreSeccion,
        codigoNomina: codigoNomina,
        nombreResponsable: nombreResponsable,
        nombreTipoHost: nombreTipoHost,
        numeroSerie: numeroSerie,
        descripcion: descripcion,
        direccionIp: direccionIp,
        fecha: fecha,
        estado: estado,
      }
    );
  }

  /* PUT API ActivosFijosManuales */
  putActivosFijosManualesApi(
    id: number,
    codigoActivo: string,
    nombreSeccion: string,
    codigoNomina: string,
    nombreResponsable: string,
    nombreTipoHost: string,
    numeroSerie: string,
    descripcion: string,
    direccionIp: string,
    fecha: string,
    estado: string
  ) {
    return this.httpClient.post<IfiltersActivosFijosManuales[]>(
      `${this._urlsApis.apiActivosFijosManuales}/${id}`,
      {
        id: id,
        codigoActivo: codigoActivo,
        nombreSeccion: nombreSeccion.toLocaleUpperCase(),
        codigoNomina: codigoNomina,
        nombreResponsable: nombreResponsable.toLocaleUpperCase(),
        nombreTipoHost: nombreTipoHost.toLocaleUpperCase(),
        numeroSerie: numeroSerie.toLocaleUpperCase(),
        descripcion: descripcion.toLocaleUpperCase(),
        direccionIp: direccionIp,
        fecha: fecha,
        estado: estado.toLocaleUpperCase(),
      }
    );
  }
  /* DELETE API ActivosFijosManuales */
  deleteActivosFijosManualesApi(id: number) {
    return this.httpClient.post(
      `${this._urlsApis.apiActivosFijosManuales}/${id}`,
      {}
    );
  }
  /* ************************************************************************ */
  private _dataBehavior = new BehaviorSubject('');
  selectedFilterOptions$ = this._dataBehavior.asObservable();

  setBreadCrumb(newData: string) {
    this._dataBehavior.next(newData);
  }
}
