import { Component, inject, OnInit } from '@angular/core';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-host',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './list-host.component.html',
  styleUrl: './list-host.component.sass',
})
export class ListHostComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  /* variables que obtiene la escritura de los campos de texto */
  filterCodigoActivo = '';
  filterSeccion = '';
  filterResponsable = '';
  filterTypeHost = '';
  filterNumeroSerie = '';
  /* variables que obtienen los resultados desde la db */
  getDbEnlaces: IfiltersEnlaces[] = [];
  getDbSecciones: IfiltersSecciones[] = [];
  getDbResponsables: IfiltersResponsables[] = [];
  getDbTypeHost: IfiltersTipoHosts[] = [];
  /* variables que obtienen los resultados de la db filtrados */
  getDbCodigoAactivoFilters: IfiltersEnlaces[] = [];
  getDbSeccionesFilters: IfiltersEnlaces[] = [];
  getDbResponsablesFilters: IfiltersEnlaces[] = [];
  getDbTypeHostFilters: IfiltersEnlaces[] = [];
  getDbNumeroSerieFilters: IfiltersEnlaces[] = [];

  ngOnInit(): void {
    this._serviceDataFilter.setBreadCrumb('Lista de dispositivos');
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

  validateInputTable(inputSelect: string) {
    const elementsCheck = document.querySelectorAll(
      '.conte__tableRegisters input'
    );
    const Id = elementsCheck[0] as HTMLInputElement;
    const CodigoActivo = elementsCheck[1] as HTMLInputElement;
    const Seccion = elementsCheck[2] as HTMLInputElement;
    const Responsable = elementsCheck[3] as HTMLInputElement;
    const TypoHost = elementsCheck[4] as HTMLInputElement;
    const NumeroSerie = elementsCheck[5] as HTMLInputElement;
    const Descripcion = elementsCheck[6] as HTMLInputElement;
    const DireccionIp = elementsCheck[7] as HTMLInputElement;
    const FechaCompra = elementsCheck[8] as HTMLInputElement;
    this.filterInputValue(inputSelect);
  }

  filterInputValue(inputSelect: string) {
    switch (inputSelect) {
      case 'Codigo Activo':
        /* buscar por codigo activo */
        this.getDbEnlaces.filter((res) => {
          if (res.codigoActivo == this.filterCodigoActivo) {
            this.getDbCodigoAactivoFilters = [res];
          }
        });
        break;
      case 'Sección':
        /* busqueda por sección */
        let dataSecciones: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((enlaces) => {
          this.getDbSecciones.filter((secciones) => {
            if (secciones.nombreSeccion == this.filterSeccion) {
              if (enlaces.idSeccion === secciones.id) {
                dataSecciones.push(enlaces);
              }
            }
          });
        });
        this.getDbSeccionesFilters = dataSecciones;
        break;
      case 'Responsable':
        /* busqueda por responsables */
        let dataResponsables: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((enlaces) => {
          this.getDbResponsables.filter((responsables) => {
            if (responsables.nombreResponsable == this.filterResponsable) {
              if (enlaces.idResponsable === responsables.id) {
                dataResponsables.push(enlaces);
              }
            }
          });
        });
        this.getDbResponsablesFilters = dataResponsables;
        break;
      case 'Tipo de Host':
        /* busqueda por responsables */
        let dataTypeHost: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((enlaces) => {
          this.getDbTypeHost.filter((typeHost) => {
            if (typeHost.nombreTipoHost == this.filterTypeHost) {
              if (enlaces.idTipoHost === typeHost.id) {
                dataTypeHost.push(enlaces);
              }
            }
          });
        });
        this.getDbTypeHostFilters = dataTypeHost;
        break;
      case 'Número de Serie':
        /* busqueda por número de serie */
        let dataNumeroSerie: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((enlaces) => {
          if (enlaces.numeroSerie == this.filterNumeroSerie) {
            dataNumeroSerie.push(enlaces);
          }
        });
        this.getDbNumeroSerieFilters = dataNumeroSerie;
        break;

      default:
        break;
    }
  }
}
