import { Component, inject, OnInit } from '@angular/core';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';
import { DataFilterService } from '../../app_services/filter/data-filter.service';

@Component({
  selector: 'app-list-host',
  standalone: true,
  imports: [],
  templateUrl: './list-host.component.html',
  styleUrl: './list-host.component.sass',
})
export class ListHostComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  /* variables que obtienen los resultados desde la db */
  getDbEnlaces: IfiltersEnlaces[] = [];
  getDbSecciones: IfiltersSecciones[] = [];
  getDbResponsables: IfiltersResponsables[] = [];
  getDbTypeHost: IfiltersTipoHosts[] = [];
  /* variables que obtienen los resultados de la db filtrados */
  getDbEnlacesFilters: IfiltersEnlaces[] = [];
  getDbSeccionesFilters: IfiltersSecciones[] = [];
  getDbResponsablesFilters: IfiltersResponsables[] = [];
  getDbTypeHostFilters: IfiltersTipoHosts[] = [];

  ngOnInit(): void {
    /* get db enlaces */
    this._serviceDataFilter.getEnlacesApi().subscribe((res) => {
      this.getDbEnlaces = res;
    });
    /* get db secciones*/
    this._serviceDataFilter.getSeccionesApi().subscribe((res) => {
      this.getDbSecciones = res;
    });
    /* get db responsables */
    this._serviceDataFilter.getResponsablesApi().subscribe((res) => {
      this.getDbResponsables = res;
    });
    /* get db typehost */
    this._serviceDataFilter.getTypeHostApi().subscribe((res) => {
      this.getDbTypeHost = res;
    });

 
  }


}
