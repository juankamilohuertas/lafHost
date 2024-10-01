import { Component, inject, OnInit } from '@angular/core';
import {
  IfiltersActualizarDesdeArchivo,
} from '../../app_models/filter/search-and-filter.models';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { FormsModule } from '@angular/forms';
import { FilesService } from '../../app_services/files/files.service';

@Component({
  selector: 'app-list-host',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './list-host.component.html',
  styleUrl: './list-host.component.sass',
})
export class ListHostComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  private readonly _serviceDataFiles = inject(FilesService);
  /* variables que obtiene la escritura de los campos de texto */
  filterId?: number;
  filterCodigoActivo = '';
  filterSeccion = '';
  filterCodigoNomina = '';
  filterResponsable = '';
  filterTypeHost = '';
  filterNumeroSerie = '';
  filterDescripcion = '';
  filterDireccionIp = '';
  filterFecha = '';

  /* variables que obtienen los resultados de la db filtrados */
  getDbFilters: IfiltersActualizarDesdeArchivo[] = [];
  /* variable que obtiene el registro seleccionado y muestra mejor la informacion */
  moreInfo: string[] = [];
  moreInfoHeaders: string[] = [];
  direccionIp: string | null = "";
  /* varible que actualiza toda la base de datos */
  getDbActualizarDb: IfiltersActualizarDesdeArchivo[] = []; 
  /* *************************************************** */
  ngOnInit(): void {
    /* get db ActualizarDb */
    this._serviceDataFiles.postApiFile().subscribe((res)=> {
      this.getDbActualizarDb = res;
    })
  }
  /* ELIMINA LOS CAMPOS QUE NO ESTAN EN FOCUS */
  validateInputTable(event: Event, inputSelect: string) {
    const selectElementInput = document.querySelectorAll(
      '.conte__tableRegisters input'
    );

    const ElementSelect = event.target as HTMLInputElement;

    for (let index = 0; index < selectElementInput.length; index++) {
      const converElement = selectElementInput[index] as HTMLInputElement;
      if (converElement !== ElementSelect) {
        converElement.value = '';
        this.getDbFilters = [];
      }
    }

    this.filterInputValue(inputSelect);
     /* actualizando los registros de la tabla enlaces */
     this._serviceDataFiles.postApiFile().subscribe((res) => {
      this.getDbActualizarDb = res;
    });
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
    'FECHA DE COMPRA',]
    this.direccionIp = elementSelectFilter!.children[8].textContent;
    window.scroll(0,70);
  }
/* ************************************** */
  /* NUESTRA EL REGISTRO SELECCIONADO */
  registerIdSelect(registerSelect: number){
    this.filterId = registerSelect;
  }
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
  if(confirm("Estas seguro que deseas actualizar la db")){
    this._serviceDataFiles.postApiFile().subscribe();
  }
}
}
