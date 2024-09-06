import { Component, inject } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { IdataFiltersApiAgregar } from '../../app_models/filter/search-and-filter.models';

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
  openFormCreateNewHost = true; //Abre el formulario (creación de dispositivo)
  openFormAgregar!:string; //abre al formulario agregar(secciones,gerencias,dependencias)
  apiAgregar!: string;

  id_secciones!: number;
  nombre_secciones = 'selecciona la sección';
  orden = "";

  nombre_gerencias = 'selecciona la gerencia';

  nombre_dependencias = 'selecciona la dependencia';

  id_impresoras = 'Tipo de Impresora';
  direccion_ip!: string;
  codigo_activo!: string;
  numero_serie!: string;
  fecha!: string;

  getDbSecciones: IdataFiltersApiAgregar[] = [];
  getDbGerencias: IdataFiltersApiAgregar[] = [];
  getDbDependencias: IdataFiltersApiAgregar[] = [];

  getApi!: string;

  constructor() {}

  /* OBTENIENDO INFO DE LAS TABLAS SECCIONES,GERENCIAS,DEPENDENCIAS */
  getData() {
    if (this.openFormCreateNewHost) {
      /* obteniendo la info desde la db secciones */
      this._dataFilter
        .getApis(this._selectApi.apiSecciones)
        .subscribe((res: IdataFiltersApiAgregar[]) => {
          for (const key in res) {
            this.getDbSecciones.push(res[key]);
          }
        });
      /* obteniendo la info desde la db gerencias */
      this._dataFilter
        .getApis(this._selectApi.apiGerencias)
        .subscribe((res: IdataFiltersApiAgregar[]) => {
          for (const key in res) {
            this.getDbGerencias.push(res[key]);
          }
        });
      /* obteniendo la info desde la db dependencias */
      this._dataFilter
        .getApis(this._selectApi.apiDependencias)
        .subscribe((res: IdataFiltersApiAgregar[]) => {
          for (const key in res) {
            this.getDbDependencias.push(res[key]);
          }
        });
      this.openFormCreateNewHost = false;
    }
  }
  /* VALIDAR LOS CAMPOS DEL FORMULARIO */
  /* ***************************** */
  selectElementsDom() {
    /* CREAR NUEVO DISPOSITIVO */
    const elementSection = document.querySelector(
      '.selectSections'
    ) as HTMLSelectElement;
    const elementGerencias = document.querySelector(
      '.selectGerencias'
    ) as HTMLSelectElement;
    const elementDependencias = document.querySelector(
      '.selectDependencias'
    ) as HTMLSelectElement;
    const elementImpresoras = document.querySelector(
      '.elementImpresoras'
    ) as HTMLSelectElement;
    const elementDireccionIp = document.querySelector(
      '.direccion_ip'
    ) as HTMLSelectElement;
    const codigoActivo = document.querySelector(
      '.codigoActivo'
    ) as HTMLSelectElement;
    /* AGREGAR NUEVA (SECCION,GERENCIA,DEPENDENCIA)  */
    const openFormAgregar = document.querySelector(
      '.openFormAgregar'
    ) as HTMLSelectElement;
    
    return {
      sectionNewHost: elementSection,
      gerenciasNewHost: elementGerencias,
      DependenciasNewHost: elementDependencias,
      ImpresorasNewHost: elementImpresoras,
      direccionIpNewHost: elementDireccionIp,
      codigoActivoNewHost: codigoActivo,
      nombreNewOpenFormAgregar: openFormAgregar,
    };
  }
  /* ***************************** */
  messageError? = false;
  validateInputs() {
    this.messageError = false;
    const expDireccionIp =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/;
    const expCodigoActivo = /^\d{5,}$/

    this.nombre_secciones !== 'selecciona la sección'
      ? this.selectElementsDom().sectionNewHost?.classList.remove(
          'validateInput'
        )
      : (this.messageError = true);

    this.nombre_gerencias !== 'selecciona la gerencia'
      ? this.selectElementsDom().gerenciasNewHost?.classList.remove(
          'validateInput'
        )
      : (this.messageError = true);

    this.nombre_dependencias !== 'selecciona la dependencia'
      ? this.selectElementsDom().DependenciasNewHost?.classList.remove(
          'validateInput'
        )
      : (this.messageError = true);

    this.id_impresoras !== 'Tipo de Impresora'
      ? this.selectElementsDom().ImpresorasNewHost?.classList.remove(
          'validateInput'
        )
      : (this.messageError = true);

    if (!expDireccionIp.test(this.direccion_ip)) {
      this.messageError = true;
      this.selectElementsDom().direccionIpNewHost?.classList.add(
        'validateInput'
      );
    } else {
      this.selectElementsDom().direccionIpNewHost?.classList.remove(
        'validateInput'
      );
    }
    if (!expCodigoActivo.test(this.codigo_activo)) {
      this.messageError = true;
      this.selectElementsDom().codigoActivoNewHost?.classList.add(
        'validateInput'
      );
    } else {
      this.selectElementsDom().codigoActivoNewHost?.classList.remove(
        'validateInput'
      );
    }
  }

  /* ENVIANDO LOS DATOS A LA TABLA ENLACES*/
  createNewPrint() {
    if (!this.messageError) {
      this._dataFilter
        .postApiEnlaces(
          parseInt(this.nombre_secciones),
          parseInt(this.id_impresoras),
          this.direccion_ip,
          this.codigo_activo,
          this.numero_serie,
          this.fecha
        )
        .subscribe();
      alert('El dispositivo se ha creado correctamente');
      window.location.reload();
    }
    this.newAdministraciones()
  }
   /* ENVIANDO LOS DATOS A LA TABLA SECCIONES,GERENCIAS Y DEPENDENCIAS*/

  agregarNew(api: string) {
    if (!this.messageError) {
      this._dataFilter
        .postApiAgregar(
          api,
          this.selectElementsDom().nombreNewOpenFormAgregar.value.toLocaleUpperCase()
        )
        .subscribe(r => console.log(r));
      window.location.reload();
      alert("se creo correctamente")
      
    }
  }
  /* ENVIANDO LOS DATOS A LA TABLA ADMINISTRACIONES */
  newAdministraciones(){
    this._dataFilter.postApiAdministraciones(parseInt(this.nombre_secciones),parseInt(this.nombre_gerencias),parseInt(this.nombre_dependencias)).subscribe(r =>{
      console.log(r)
    });
  }

  /* **************pruebas***************** */
  validateNewInputs(element: string) {
    const domElement = this.selectElementsDom();
    let exp = /^[^\s]{2,}[ \s]*.*$/;
    let domElementSelect = domElement.nombreNewOpenFormAgregar;
    
    this.openFormAgregar = element;
    switch (element) {
      case 'Sección':
        this.apiAgregar = this._selectApi.apiSecciones
        break;
      case 'Gerencia':
        this.apiAgregar = this._selectApi.apiGerencias
        break;
      case 'Dependencia':
        this.apiAgregar = this._selectApi.apiDependencias
        break;
      default:
        alert("Ha ocurrido un error")
        break;
    }
    this.testValidation(exp, domElementSelect!.value, domElementSelect,this.apiAgregar!);
  }

  testValidation(exp: RegExp, inputValue: string, domElementSelect: HTMLElement | undefined,api: string) {
    this.messageError = false;
    if (!exp.test(inputValue) && api != "") {
      this.messageError = true;
      domElementSelect!.classList.add('validateInput');
    } else {
      domElementSelect!.classList.remove('validateInput');
    }
  }
}
