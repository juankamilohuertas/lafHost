import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IfiltersActualizarDesdeArchivo } from '../../app_models/filter/search-and-filter.models';
import { catchError, map, of, retry, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private readonly _urlsApis = environment;
  constructor(private httpClient: HttpClient) {}
  
  /* GET ACTUALIZAR DB DESDE EL ARCHIVO */
  postApiFile() {
    return this.httpClient.get<IfiltersActualizarDesdeArchivo[]>(
      this._urlsApis.apiActualizarDb);
  }
}
