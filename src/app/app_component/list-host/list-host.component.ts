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
  filterCodigoNomina = '';
  filterResponsable = '';
  filterTypeHost = '';
  filterNumeroSerie = '';
  filterDescripcion = '';
  filterDireccionIp = '';
  filterFecha = '';
  /* variables que obtienen los resultados desde la db */
  getDbEnlaces: IfiltersEnlaces[] = [];
  getDbSecciones: IfiltersSecciones[] = [];
  getDbResponsables: IfiltersResponsables[] = [];
  getDbTypeHost: IfiltersTipoHosts[] = [];
  /* variables que obtienen los resultados de la db filtrados */
  getDbCodigoAactivoFilters: IfiltersEnlaces[] = [];
  getDbSeccionesFilters: IfiltersEnlaces[] = [];
  getDbCodigoNominaFilters: IfiltersEnlaces[] = [];
  getDbResponsablesFilters: IfiltersEnlaces[] = [];
  getDbTypeHostFilters: IfiltersEnlaces[] = [];
  getDbNumeroSerieFilters: IfiltersEnlaces[] = [];
  getDbDescripcionFilters: IfiltersEnlaces[] = [];
  getDbDireccionIpFilters: IfiltersEnlaces[] = [];
  getDbFechaFilters: IfiltersEnlaces[] = [];
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

  validateInputTable(event: Event, inputSelect: string) {
    const selectElementInput = document.querySelectorAll(
      '.conte__tableRegisters input'
    );

    const ElementSelect = event.target as HTMLInputElement;

    for (let index = 0; index < selectElementInput.length; index++) {
      const converElement = selectElementInput[index] as HTMLInputElement;
      if (converElement !== ElementSelect) {
        converElement.value = '';
        this.getDbCodigoAactivoFilters = [];
        this.getDbSeccionesFilters = [];
        this.getDbResponsablesFilters = [];
        this.getDbTypeHostFilters = [];
        this.getDbNumeroSerieFilters = [];
        this.getDbDescripcionFilters = [];
        this.getDbDireccionIpFilters = [];
        this.getDbFechaFilters = [];
      }
    }

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
        case 'Código Nomina':
        /* busqueda por Código Nomina */
        let dataCodigoNomina: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((enlaces) => {
          this.getDbResponsables.filter((codigoNomina) => {
            if (codigoNomina.codigoCentauro == parseInt(this.filterCodigoNomina)) {
              if (enlaces.idResponsable === codigoNomina.id) {
                dataCodigoNomina.push(enlaces);
              }
            }
          });
        });
        this.getDbCodigoNominaFilters = dataCodigoNomina;
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
      case 'Descripción':
        /* busqueda por Descripción */
        let dataDescripcion: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((descripcion) => {
          if (descripcion.descripcion == this.filterDescripcion) {
            dataDescripcion.push(descripcion);
          }
        });
        this.getDbDescripcionFilters = dataDescripcion;
        break;
      case 'Dirección IP':
        /* busqueda por Dirección IP */
        let dataDireccionIp: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((direccionIp) => {
          if (direccionIp.direccionIp == this.filterDireccionIp) {
            dataDireccionIp.push(direccionIp);
          }
        });
        this.getDbDireccionIpFilters = dataDireccionIp;
        break;
      case 'Fecha de Compra':
        /* busqueda por Fecha de Compra */
        let dataFecha: IfiltersEnlaces[] = [];
        this.getDbEnlaces.filter((fecha) => {
          if (fecha.fecha == this.filterFecha) {
            dataFecha.push(fecha);
          }
        });
        this.getDbFechaFilters = dataFecha;
        break;
      default:
        break;
    }
  }
}
