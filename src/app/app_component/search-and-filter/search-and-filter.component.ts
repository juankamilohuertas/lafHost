import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import {
  IfiltersEnlaces,
  IfiltersResponsables,
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);

  searchByCode?: string; // busqueda por Codigo S/N
  searchByCodeCentauro?: string // busqueda por codigo centauro
  searchBySeccion?: string // busqueda por sección

  /* variables para crear un nuevo host */
  codigo_activo = '';
  id_seccion = 'nombre de sección';
  id_responsable = 'nombre de responsable';
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

  /* variables que obtienen los datos filtrados de la busqueda secciones */
  getEnlacesFilter: IfiltersEnlaces[] = [];
  getSeccionesFilter: string = "";
  getResponsablesFilter: IfiltersResponsables[] = [];
  getTypeHostFilter: IfiltersTipoHosts[] = [];

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

  /* valida los campos cuando se crea un nuevo dispositivo */
  validateInputs(event: Event, valueInput: string, nameInput: string) {
    const expCodigoActivo = /^\d{5,}$/;
    const expDireccionIp =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/;

    const elementValidate = event.target as HTMLElement;
    if (
      valueInput != 'nombre de sección' &&
      valueInput != 'tipo de host' &&
      valueInput != 'nombre de responsable'
    ) {
      elementValidate.classList.remove('validateInput');
    } else {
      elementValidate.classList.add('validateInput');
    }

    if (nameInput == 'codigo activo') {
      this.noRepeatCodigoActivoOrDireccionIp(
        nameInput,
        valueInput,
        elementValidate,
        expCodigoActivo
      );
    }

    if (nameInput == 'direccion ip') {
      this.noRepeatCodigoActivoOrDireccionIp(
        nameInput,
        valueInput,
        elementValidate,
        expDireccionIp
      );
    }
  }
  /* verifica que todos los campos codigo activo y direccion ip de los registros enlaces no se repitan */
  noRepeatCodigoActivoOrDireccionIp(
    nameInput: string,
    valueInput: string,
    elementValidate: HTMLElement,
    expCodigoActivoOrDireccionIp: RegExp
  ) {
    if (nameInput == 'codigo activo') {
      let repeatCodigoActivo: number = -1;
      if (this.noRepeatInputs()[0][0] != undefined) {
        repeatCodigoActivo = this.noRepeatInputs()[0][0].indexOf(valueInput);
        if (repeatCodigoActivo !== -1) {
          alert('El codigo activo ya existe');
        }
      }
      if (
        !expCodigoActivoOrDireccionIp.test(valueInput) ||
        repeatCodigoActivo !== -1
      ) {
        elementValidate.classList.add('validateInput');
      } else {
        elementValidate.classList.remove('validateInput');
      }
    } else if (nameInput == 'direccion ip') {
      let repeatDireccionIp: number = -1;
      if (this.noRepeatInputs()[0][1] != undefined) {
        repeatDireccionIp = this.noRepeatInputs()[0][1].indexOf(valueInput);
        if (repeatDireccionIp !== -1) {
          alert('La dirección ip ya existe');
        }
      }
      if (
        !expCodigoActivoOrDireccionIp.test(valueInput) ||
        repeatDireccionIp !== -1
      ) {
        elementValidate.classList.add('validateInput');
      } else {
        elementValidate.classList.remove('validateInput');
      }
    }
  }
  /* trae todos los codigos activos y direcciones ip de la tabla enlaces */
  noRepeatInputs() {
    let getDbCodigosActivosFilters: string[] = [];
    let getDbDireccionesIpsFilters: string[] = [];
    if (this.getDbEnlaces.length != 0) {
      return this.getDbEnlaces.map((res) => {
        getDbCodigosActivosFilters.push(res.codigoActivo);
        getDbDireccionesIpsFilters.push(res.direccionIp);
        return [getDbCodigosActivosFilters, getDbDireccionesIpsFilters];
      });
    } else {
      return [getDbCodigosActivosFilters, getDbDireccionesIpsFilters];
    }
  }
  /* crea un nuevo registro de dispositivo o actualizacion de los datos en la db enlaces */
  postNewHost(saveChanges: string) {
    if (saveChanges === 'Crear Dispositivo') {
      const validateInputsElements =
        document.querySelectorAll('.validateInput');
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
        alert('El dispositivo se creo correctamente');
        this.refreshFromInputsCreate();
        this.removeOrAddError(saveChanges);
      }
    } else if (saveChanges === 'Actualizar Dispositivo') {
      this._serviceDataFilter
        .putEnlacesApi(
          this.getDbEnlacesFilters[0].id,
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
      alert('El dispositivo se actializó correctamente');
      this.removeOrAddError(saveChanges);
    }
    /* actualizando los registros de la tabla enlaces */
    /* get db enlaces */
    this._serviceDataFilter.getEnlacesApi().subscribe((res) => {
      this.getDbEnlaces = res;
    });
  }
  /* eliminar un registro de la db enlaces */
  deleteRegisterEnlaces(){
    const confirmDelete = confirm("Estas seguro que deseas eliminar el registro")
    if(confirmDelete){
      this._serviceDataFilter.deleteEnlacesApi(this.getDbEnlacesFilters[0].id).subscribe();
       /* actualizando los registros de la tabla enlaces */
    /* get db enlaces */
    this._serviceDataFilter.getEnlacesApi().subscribe((res) => {
      this.getDbEnlaces = res;
    });
    }
  }

  /* elimina o agrega la clase de error en todos los inputs*/
  removeOrAddError(saveChanges: string) {
    const elementInputsSeccion = document.querySelector('.secciones');
    const elementInputsResponsable = document.querySelector('.responsable');
    const elementInputsHost = document.querySelector('.host');
    const elementInputsCodigoActivo = document.querySelector('.codigo_activo');
    const elementInputsDireccionIp = document.querySelector('.direccion_ip');
    const inputsByAddError = [
      elementInputsSeccion,
      elementInputsResponsable,
      elementInputsHost,
      elementInputsCodigoActivo,
      elementInputsDireccionIp,
    ];
    if (saveChanges === 'Crear Dispositivo') {
      inputsByAddError.forEach((res) => res?.classList.add('validateInput'));
    } else if (saveChanges === 'Actualizar Dispositivo') {
      inputsByAddError.forEach((res) => res?.classList.remove('validateInput'));
    }
  }
  /* limpia los campos del formulario crear dispositivo */
  refreshFromInputsCreate() {
    this.codigo_activo = '';
    this.id_seccion = 'nombre de sección';
    this.id_responsable = 'nombre de responsable';
    this.id_host = 'tipo de host';
    this.numero_serie = '';
    this.descripcion = '';
    this.direccion_ip = '';
    this.fecha_compra = '';
  }
  /* Asigna los valores buscados por codigo activo en el formulario update */
  assignFormImputsUpdate() {
    this.codigo_activo = this.getDbEnlacesFilters[0].codigoActivo;
    this.id_seccion = this.getDbEnlacesFilters[0].idSeccion.toString();
    this.id_responsable = this.getDbEnlacesFilters[0].idResponsable.toString();
    this.id_host = this.getDbEnlacesFilters[0].idTipoHost.toString();
    this.numero_serie = this.getDbEnlacesFilters[0].numeroSerie;
    this.descripcion = this.getDbEnlacesFilters[0].descripcion;
    this.direccion_ip = this.getDbEnlacesFilters[0].direccionIp;
    this.fecha_compra = this.getDbEnlacesFilters[0].fecha;
  }
  /* ************************************************************* */
  /* buscar por codigo activo*/
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
    }else if(this.searchByCode !== undefined){
      alert("No se encontro el codigo activo");
    }
    this.searchByCode = "";
  }

  /* boton que maneja el control de todas las operaciones del crud */
  controlCrud(op: string, codigoActivo: string, direccionIp: string) {
    if (op === 'Crear Dispositivo') {
      this.saveChanges = op;
      this.refreshFromInputsCreate();
      this.removeOrAddError(this.saveChanges);
    } else if (op === 'Actualizar Dispositivo') {
      this.saveChanges = op;
      this.assignFormImputsUpdate();
      this.removeOrAddError(this.saveChanges);
    }
  }

/* buscar por codigo de centauro */
getDbEnlacesByCentauro: IfiltersEnlaces[] = [];
getDbSeccionesByCentauro: IfiltersSecciones[] = [];
getDbResponsableByCentauro: IfiltersResponsables[] = [];
getDbTipoHostByCentauro: IfiltersTipoHosts[] = [];

btnSearchByCodesCentauro(){
  
  const responsables = this.getDbResponsables.filter(res => res.codigoCentauro === parseInt(this.searchByCodeCentauro!));

  if(responsables.length !== 0){
    const hostAdminByUser = this.getDbEnlaces.filter(res => res.idResponsable === responsables[0].id);
    this.getDbEnlacesByCentauro = [...hostAdminByUser];

    const secciones = this.getDbSecciones.filter(res => res.id === hostAdminByUser[0].idSeccion); 
    this.getDbSeccionesByCentauro = [...secciones];

    const responsable = this.getDbResponsables.filter(res => res.codigoCentauro === responsables[0].codigoCentauro);
    this.getDbResponsableByCentauro = [...responsable];

    const typeHost = this.getDbTypeHost.filter(res => res.id === hostAdminByUser[0].idTipoHost);
    this.getDbTipoHostByCentauro = [...typeHost];
  }else if(this.searchByCodeCentauro !== undefined){
    alert("No se encontro el usuario");
  }
  this.searchByCodeCentauro = "";
}

/* busqueda por clic de item en la tabla busqueda por codigo de nomina y sección*/
itemSelectByCodesCentauro($event: Event,itemSelect: string){
  this.searchByCode = itemSelect
  this.btnSearchByCodes();

  if(document.querySelectorAll(".selectRowElement").length != 0){
    const allElementsTable = document.querySelectorAll(".selectRowElement");
    allElementsTable.forEach(ele => {
      ele.classList.remove("selectRowElement");
    })
  }
  const elementSelect = $event.target as HTMLTableRowElement;
  const el = elementSelect.parentNode as Element;
  el.classList.add("selectRowElement");
}

/* buscar por sección */
btnSearchByCodesSeccion(){
  
  const getSecciones = this.getDbSecciones.filter(res => res.nombreSeccion == this.searchBySeccion);
  
  if(this.searchBySeccion !== undefined && getSecciones[0] !== undefined){
    /* enlaces */
   const filterEnlaces = this.getDbEnlaces.filter(res => res.idSeccion == getSecciones[0].id)
   this.getEnlacesFilter = filterEnlaces; 
   /* secciones */
   this.getSeccionesFilter = getSecciones[0].nombreSeccion; 
   /* responsables */
   const filterResponsables = this.getDbResponsables.filter(res => res.idSeccion === getSecciones[0].id)
   this.getResponsablesFilter = filterResponsables;
  /* tipohost */
  
  this.getTypeHostFilter = [];
  let getTypeHost: Set<IfiltersTipoHosts> = new Set();
  this.getDbTypeHost.filter(host => {
    filterEnlaces.filter(enlaces => {
      if(enlaces.idTipoHost === host.id){
        getTypeHost.add(host);
      }
    })
  })
  let convertGetTypeHost = Array.from(getTypeHost);
  this.getTypeHostFilter = convertGetTypeHost;
  this.searchBySeccion = "";
  }else{
    alert("No se encontraton resultados");
  }
}

validateSearch(): void{
  if(this.searchByCode !== undefined && this.searchByCode !== ""){
    this.btnSearchByCodes();
  }else if(this.searchByCodeCentauro !== undefined && this.searchByCodeCentauro !== ""){
    this.btnSearchByCodesCentauro();
  }
}

   /* Presionando la tecla enter hace la busqueda por codigo activo,nomina o sección */
   @HostListener('window:keydown', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent): void {
     if (event.key === 'Enter') {
      this.validateSearch();
     }
   }
   
}
