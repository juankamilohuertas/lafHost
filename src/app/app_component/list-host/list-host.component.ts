import { Component, inject, OnInit } from '@angular/core';
import {IfiltersActualizarDesdeArchivo} from '../../app_models/filter/search-and-filter.models';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { FormsModule } from '@angular/forms';
import { FilesService } from '../../app_services/files/files.service';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { get } from 'node:http';

@Component({
  selector: 'app-list-host',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './list-host.component.html',
  styleUrl: './list-host.component.sass',
})
export class ListHostComponent implements OnInit {
  private readonly _serviceDataFiles = inject(FilesService);
  private readonly _serviceDataFilters = inject(DataFilterService);
  getAllInputsValues = '';
  /* variable que obtiene la db filtrada por tipo de busqueda */
  getDbFilters: IfiltersActualizarDesdeArchivo[] = [];
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
  filterEstado = '';

  /* variables que obtienen los resultados filtrados en la busqueda sin que se repitan */
  getDbfilterByCodigoActivo: string[] = [];
  getDbfilterByNombreSeccion: string[] = [];
  getDbfilterByCodigoNomina: string[] = [];
  getDbfilterByNombreResponsable: string[] = [];
  getDbfilterByTipoHost: string[] = [];
  getDbfilterByNumeroSerie: string[] = [];
  getDbfilterByDescripcion: string[] = [];
  getDbfilterByDireccionIp: string[] = [];
  getDbfilterByFecha: string[] = [];
  getDbfilterByEstado: string[] = [];
  /* variable que obtiene el registro seleccionado y muestra mejor la informacion */
  moreInfo: string[] = [];
  moreInfoHeaders: string[] = [];
  direccionIp: string | null = "";
  /* varible que actualiza toda la base de datos */
  getDbActualizarDb: IfiltersActualizarDesdeArchivo[] = []; 
  /* *************************************************** */
  ngOnInit(): void {
    /* get db ActualizarDb */
      this._serviceDataFiles.postApiFile().pipe(
      ).subscribe(res => {
        this.getDbActualizarDb = [...res];
      })
    
    

    setTimeout(() => {
      /* actualizando la db secciones */
    this.validateValuesRepeats();
    
    }, 2000);
    
  }
  /* ELIMINA LOS CAMPOS QUE NO ESTAN EN FOCUS */
  validateInputTable(event: Event, inputSelect: string) {
    const selectElementInput = document.querySelectorAll(
      '.conte__headTableRegisters input'
    );

    const ElementSelect = event.target as HTMLInputElement;
    for (let index = 0; index < selectElementInput.length; index++) {
      const converElement = selectElementInput[index] as HTMLInputElement;
      if (converElement !== ElementSelect) {
        converElement.value = '';
        this.getDbFilters = [];
      }
    }
    this.validateValuesRepeats();
    this.filterInputValue(inputSelect);
    this.getAllInputsValues = ElementSelect.value;
  }
  /* FILTRA CADA AREA QUE LOS VALORES NO SE REPITAN A MEDIDA QUE EL USUARIO HACE UNA BUSQUEDA */
  validateValuesRepeats(){
    const valuesRepeatsCodigoActivo: Set<string> = new Set();
    const valuesRepeatsNombreSeccion: Set<string> = new Set();
    const  valuesRepeatsCodigoNomina: Set<string> = new Set();
    const  valuesRepeatsNombreResponsable: Set<string> = new Set();
    const  valuesRepeatsNombreTipoHost: Set<string> = new Set();
    const  valuesRepeatsNumeroSerie: Set<string> = new Set();
    const  valuesRepeatsDescripcion: Set<string> = new Set();
    const  valuesRepeatsDireccionIp: Set<string> = new Set();
    const  valuesRepeatsFecha: Set<string> = new Set();
    const  valuesRepeatsEstado: Set<string> = new Set();
    for (const element of this.getDbActualizarDb) {
      valuesRepeatsCodigoActivo.add(element.codigoActivo);
      valuesRepeatsNombreSeccion.add(element.nombreSeccion);
      valuesRepeatsCodigoNomina.add(element.codigoNomina);
      valuesRepeatsNombreResponsable.add(element.nombreResponsable);
      valuesRepeatsNombreTipoHost.add(element.nombreTipoHost);
      valuesRepeatsNumeroSerie.add(element.numeroSerie);
      valuesRepeatsDescripcion.add(element.descripcion);
      valuesRepeatsDireccionIp.add(element.direccionIp);
      valuesRepeatsFecha.add(element.fecha);
      valuesRepeatsEstado.add(element.estado);
    }
    this.getDbfilterByCodigoActivo = [...valuesRepeatsCodigoActivo];
    this.getDbfilterByNombreSeccion = [...valuesRepeatsNombreSeccion];
    this.getDbfilterByCodigoNomina = [...valuesRepeatsCodigoNomina];
    this.getDbfilterByNombreResponsable = [...valuesRepeatsNombreResponsable];
    this.getDbfilterByTipoHost = [...valuesRepeatsNombreTipoHost];
    this.getDbfilterByNumeroSerie = [...valuesRepeatsNumeroSerie];
    this.getDbfilterByDescripcion = [...valuesRepeatsDescripcion];
    this.getDbfilterByDireccionIp = [...valuesRepeatsDireccionIp];
    this.getDbfilterByFecha = [...valuesRepeatsFecha];
    this.getDbfilterByEstado = [...valuesRepeatsEstado];
  }
  /* ASIGNA EL CONTENIDO DE FILTRADO PARA MOSTRAR EN EL DOM */
  filterInputValue(inputSelect: string) {
    switch (inputSelect) {
      case 'Codigo Activo':
        /* buscar por codigo activo */       
        this.getDbActualizarDb.filter((res) => {
          if (res.codigoActivo == this.filterCodigoActivo) {
            this.getDbFilters = [res];
          }
        });
        break;
      case 'Sección':
        /* busqueda por sección */
        let dataSecciones: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
              if (res.nombreSeccion === this.filterSeccion) {
                dataSecciones.push(res);
              }
        });
        this.getDbFilters = dataSecciones;
        break;
      case 'Código Nomina':
        /* busqueda por Código Nomina */
        let dataCodigoNomina: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
              if (res.codigoNomina === this.filterCodigoNomina) {
                dataCodigoNomina.push(res);
              }
          
        });
        this.getDbFilters = dataCodigoNomina;
        break;
      case 'Responsable':
        /* busqueda por responsables */
        let dataResponsables: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
              if (res.nombreResponsable === this.filterResponsable) {
                dataResponsables.push(res);
              }
        });
        this.getDbFilters = dataResponsables;
        break;
      case 'Tipo de Host':
        /* busqueda por responsables */
        let dataTypeHost: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          
           
              if (res.nombreTipoHost === this.filterTypeHost) {
                dataTypeHost.push(res);
              }
            
         
        });
        this.getDbFilters = dataTypeHost;
        break;
      case 'Número de Serie':
        /* busqueda por número de serie */
        let dataNumeroSerie: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          if (res.numeroSerie == this.filterNumeroSerie) {
            dataNumeroSerie.push(res);
          }
        });
        this.getDbFilters = dataNumeroSerie;
        break;
      case 'Descripción':
        /* busqueda por Descripción */
        let dataDescripcion: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          if (res.descripcion == this.filterDescripcion) {
            dataDescripcion.push(res);
          }
        });
        this.getDbFilters = dataDescripcion;
        break;
      case 'Dirección IP':
        /* busqueda por Dirección IP */
        let dataDireccionIp: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          if (res.direccionIp == this.filterDireccionIp) {
            dataDireccionIp.push(res);
          }
        });
        this.getDbFilters = dataDireccionIp;
        break;
      case 'Fecha de Compra':
        /* busqueda por Fecha de Compra */
        let dataFecha: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          if (res.fecha == this.filterFecha) {
            dataFecha.push(res);
          }
        });
        this.getDbFilters = dataFecha;
        break;
        case 'Estado':
        /* busqueda por estado */
        let dataEstado: IfiltersActualizarDesdeArchivo[] = [];
        this.getDbActualizarDb.filter((res) => {
          if (res.estado == this.filterEstado) {
            dataEstado.push(res);
          }
        });
        this.getDbFilters = dataEstado;
        break;
      default:
        break;
    }
    
  }
  /* AGREGA ESTILOS A LOS ELEMENTOS FILTRADOS SELECCIONADOS */
  selectRegisterStyles(event: Event) {
    const pruebaConverEle = document.querySelector(
      '.conte__resultSearches'
    ) as HTMLElement;

    /* elimina los elementos que estan seleccionados */
    for (let index = 0; index < pruebaConverEle.children.length; index++) {
      
      if (
        pruebaConverEle.children[index].classList.contains('validateRegisters')
      ) {
        pruebaConverEle.children[index].classList.remove('validateRegisters');
      }
      
    }
    this.selectRegisterInfo(event);
  }
  /* MUESTRA LA INFO FILTRADA DETALLADA Y ASIGNA LA IP PARA INGRESAR AL DISPOSITIVO*/
  selectRegisterInfo(event: Event) {
    const elementSelect = event.target as HTMLTableRowElement;
    const elementSelectFilter = elementSelect.parentElement;
    elementSelectFilter!.classList.add('validateRegisters');
 
    let elementsSelectTd: string[] = [];
    for (let index = 0; index < elementSelectFilter!.children.length; index++) {
      elementsSelectTd.push(elementSelectFilter!.children[index].textContent!);
    }
    this.moreInfo = elementsSelectTd;
    this.moreInfoHeaders = [
    'ID',
    'CODIGO ACTIVO',
    'SECCIÓN',
    'CÓDIGO NOMINA',
    'RESPONSABLE',
    'TYPO DE HOST',
    'NÚMERO DE SERIE',
    'DESCRIPCIÓN',
    'DIRECCIÓN IP',
    'FECHA DE COMPRA',
    'ESTADO']
    this.direccionIp = elementSelectFilter!.children[8].textContent;
    window.scroll(0,70);
  }
/* ************************************** */
  /* EDITA EL REGISTRO SELECCIONADO */
  elementSelected!: unknown;
  updateRegister(){
    console.log(this.elementSelected)
  }
  /* HABILITA LOS PERMISOS PARA LA EDICIÓN */
  elementSelect(event: Event){
      const data = event.target as HTMLElement;
      const direccionIp = data.parentNode;
      this.elementSelected = direccionIp;
  }
/* ***************************************************** */
/* ****************** ACTUALIZACION DB *******************/
/* ***************************************************** */
/* ACTUALIZAR LA DB DESDE UN ARCHIVO TXT*/
updateDb(){
  if(confirm("Estas seguro de actualizar la db")){
    /* get db ActualizarDb */
    this._serviceDataFiles.postApiFile().subscribe((res)=> {
      this.getDbActualizarDb = res;
    })
    alert("Se actualizó correctamente.")
  }
}
}
