import {
  IdataFiltersDependencias,
  IdataFiltersGerencias,
  IdataFiltersSecciones,
} from './../../app_models/filter/search-and-filter.models';
import { Component, inject } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-opt-configuration',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, LowerCasePipe],
  templateUrl: './opt-configuration.component.html',
  styleUrl: './opt-configuration.component.sass',
})
export class OptConfigurationComponent {
  private readonly _dataFilter = inject(DataFilterService);
  private readonly _selectApi = environment;
  openFormCreateNewHost = true; //Abre el formulario

  id_secciones!: number;
  nombre_secciones = 'selecciona la sección';
  orden!: string;

  nombre_gerencias = 'selecciona la gerencia';

  nombre_dependencias = 'selecciona la dependencia';

  id_impresoras = 'Tipo de Impresora';
  direccion_ip!: string;
  codigo_activo!: string;
  numero_serie!: string;
  fecha!: string;

  getDbSecciones: IdataFiltersSecciones[] = [];
  getDbGerencias: IdataFiltersSecciones[] = [];
  getDbDependencias: IdataFiltersSecciones[] = [];

  getApi!: string;

  constructor() {}

  /* OBTENIENDO INFO DE LAS TABLAS SECCIONES,GERENCIAS,DEPENDENCIAS */
  getData() {
    if (this.openFormCreateNewHost) {
      /* obteniendo la info desde la db secciones */
      this._dataFilter
        .getApis(this._selectApi.apiSecciones)
        .subscribe((res: IdataFiltersSecciones[]) => {
          for (const key in res) {
            this.getDbSecciones.push(res[key]);
          }
        });
      /* obteniendo la info desde la db gerencias */
      this._dataFilter
        .getApis(this._selectApi.apiGerencias)
        .subscribe((res: IdataFiltersSecciones[]) => {
          for (const key in res) {
            this.getDbGerencias.push(res[key]);
          }
        });
      /* obteniendo la info desde la db dependencias */
      this._dataFilter
        .getApis(this._selectApi.apiDependencias)
        .subscribe((res: IdataFiltersSecciones[]) => {
          for (const key in res) {
            this.getDbDependencias.push(res[key]);
          }
        });
      this.openFormCreateNewHost = false;
    }
  }
/* VALIDAR LOS CAMPOS DEL FORMULARIO */
  messageError? = false;
  validateInputs(){
    this.messageError = false;
    const elementSection = document.querySelector(".selectSections") as HTMLSelectElement;
    const elementGerencias = document.querySelector(".selectGerencias") as HTMLSelectElement;
    const elementDependencias = document.querySelector(".selectDependencias") as HTMLSelectElement;
    const elementImpresoras = document.querySelector(".elementImpresoras") as HTMLSelectElement;
    const elementDireccionIp = document.querySelector(".direccion_ip") as HTMLSelectElement;
    const expDireccion_Ip = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/

    this.nombre_secciones !== 'selecciona la sección'?elementSection?.classList.remove
    ("validateInput"):this.messageError = true;
    
    this.nombre_gerencias !== 'selecciona la gerencia'?elementGerencias?.classList.remove
    ("validateInput"):this.messageError = true;
    
    this.nombre_dependencias !== 'selecciona la dependencia'?elementDependencias?.classList.remove("validateInput"):this.messageError = true;

    this.id_impresoras !== 'Tipo de Impresora'?elementImpresoras?.classList.remove
    ("validateInput"):this.messageError = true;


    if(!expDireccion_Ip.test(this.direccion_ip)){
      this.messageError = true;
      elementDireccionIp?.classList.add("validateInput");
    }else{
      elementDireccionIp?.classList.remove("validateInput");
    }
   
  }

  /* ENVIANDO LOS DATOS A LA DB */
  createNewPrint() {
    
    /* this._dataFilter
      .postApiSecciones(
        this._selectApi.apiSecciones,
        this.nombre_secciones.toLocaleUpperCase(),
        this.orden
      )
      .subscribe((r) => {
        console.log(r);
      });

    this._dataFilter
      .postApiSecciones(
        this._selectApi.apiGerencias,
        this.nombre_gerencias.toLocaleUpperCase(),
        this.orden
      )
      .subscribe((r) => {
        console.log(r);
      });

    this._dataFilter
      .postApiSecciones(
        this._selectApi.apiDependencias,
        this.nombre_dependencias.toLocaleUpperCase(),
        this.orden
      )
      .subscribe((r) => {
        console.log(r);
      }); */
    if(!this.messageError){
      this._dataFilter
      .postApiEnlaces(
        parseInt(this.nombre_secciones),
        parseInt(this.id_impresoras),
        this.direccion_ip,
        this.codigo_activo,
        this.numero_serie,
        this.fecha
      )
      .subscribe((r) => console.log(r));
    }
    console.log(this.messageError)
      
      /* window.location.reload(); */
  }

  
  
}
