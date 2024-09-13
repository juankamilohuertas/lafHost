import { map } from 'rxjs';
import {
  Component,
  DebugElement,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';
import { Console } from 'console';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);

  searchType: string = 'Buscar por...';
  searchByCode?: string; // busqueda por Codigo S/N

  /* variables para crear un nuevo host */
  codigo_activo = '';
  id_seccion = 'nombre de sección';
  id_responsable = "nombre de responsable";
  id_host = 'tipo de host';
  numero_serie = '';
  descripcion = '';
  direccion_ip = '';
  fecha_compra = '';
  saveChanges = 'refresh';

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

  
  
  constructor() {}

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

  /* valida los campos cuando se crea un host */
  validateInputs(event: Event, valueInput: string, nameInput: string) {
    const expCodigoActivo = /^\d{5,}$/;
    const expDireccionIp =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/;

    const elementValidate = event.target as HTMLElement;
    if (valueInput != 'nombre de sección' && valueInput != 'tipo de host' && valueInput != 'nombre de responsable') {
      elementValidate.classList.remove('validateInput');
    } else {
      elementValidate.classList.add('validateInput');
    }

    if (nameInput == 'codigo activo') {
      if (!expCodigoActivo.test(valueInput)) {
        elementValidate.classList.add('validateInput');
      } else {
        elementValidate.classList.remove('validateInput');
      }
    }

    if (nameInput == 'direccion ip') {
      if (!expDireccionIp.test(valueInput)) {
        elementValidate.classList.add('validateInput');
      } else {
        elementValidate.classList.remove('validateInput');
      }
    }
  }
  /* verifica que todos los campos codigo activo y direccion ip de los registros enlaces no se repiran */
  noRepeatInputs() {
    return this.getDbEnlaces.map((res) => [res.codigoActivo, res.direccionIp]);
  }
  /* crea un nuevo registro de host en la db */
  postNewHost() {
    const validateInputsElements = document.querySelectorAll('.validateInput');
    if (validateInputsElements.length === 0) {
      this._serviceDataFilter
        .postEnlacesApi(
          this.codigo_activo,
          parseInt(this.id_seccion),
          parseInt(this.id_responsable),
          parseInt(this.id_host),
          this.numero_serie,
          this.descripcion,
          this.direccion_ip,
          this.fecha_compra
        )
        .subscribe();
      alert('El host se creo correctamente');
      this.codigo_activo = '';
      this.id_seccion = 'nombre de sección';
      this.id_responsable = "nombre de responsable";
      this.id_host = 'tipo de host';
      this.numero_serie = '';
      this.descripcion = '';
      this.direccion_ip = '';
      this.fecha_compra = '';
      const elementInputsSeccion = document.querySelector('.secciones');
      const elementInputsResponsable = document.querySelector('.responsable');
      const elementInputsHost = document.querySelector('.host');
      const elementInputsCodigoActivo =
        document.querySelector('.codigo_activo');
      const elementInputsDireccionIp = document.querySelector('.direccion_ip');
      const inputsByAddError = [
        elementInputsSeccion,
        elementInputsResponsable,
        elementInputsHost,
        elementInputsCodigoActivo,
        elementInputsDireccionIp,
      ];
      inputsByAddError.forEach((res) => res?.classList.add('validateInput'));
    }
  }

  /* ************************************************************* */
  /* buscar el codigo*/
  btnSearchByCodes() {
    const codigosActivos: string[] = [];
    let dataEnlacesFilter: IfiltersEnlaces[] = [];

    this.getDbEnlaces.map((res) => codigosActivos.push(res.codigoActivo));

    if (codigosActivos.indexOf(this.searchByCode!) != -1) {
      /* enlaces */
      dataEnlacesFilter = this.getDbEnlaces.filter(
        (res) => res.codigoActivo === this.searchByCode
      );
      this.getDbEnlacesFilters = [...dataEnlacesFilter];
      /* seccion */
      const nombreSeccion = this.getDbSecciones.filter(
        (res) => res.id == dataEnlacesFilter[0].idSeccion
      );
      this.getDbSeccionesFilters = [...nombreSeccion];
      /* responsable */
      const nombreResponsable = this.getDbResponsables.filter(
        (res) => res.id == this.getDbEnlacesFilters[0].idResponsable
      );
      this.getDbResponsablesFilters = [...nombreResponsable];
      /* tipo host */
      const nombreTipoHost = this.getDbTypeHost.filter(
        (res) => res.id == this.getDbEnlacesFilters[0].idTipoHost
      );
      this.getDbTypeHostFilters = [...nombreTipoHost];
    }
  }

  /* Presionando la tecla enter hace la busqueda por codigo activo */
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
    }
  }

  /* boton de actualiza los datos filtrados */
  updateFilterByCode(){
    
  }
}
