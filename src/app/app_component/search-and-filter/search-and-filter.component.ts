import {
  IdataFiltersAdministraciones,
  IdataFiltersApiAgregar,
  IdataFiltersEnlaces,
  IdataFiltersProperty,
} from './../../app_models/filter/search-and-filter.models';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent implements OnInit {
  private readonly _dataFilter = inject(DataFilterService);
  private readonly _selectApi = environment;
  searchType: string = 'Buscar por...';
  searchByCode?: string; // busqueda por Codigo S/N
  getInfoEnlaces: IdataFiltersEnlaces[] = [];
  getInfoSecciones: IdataFiltersApiAgregar[] = [];
  getInfoGerencias: IdataFiltersApiAgregar[] = [];
  getInfoDependencias: IdataFiltersApiAgregar[] = [];
  getInfoAdministraciones: IdataFiltersAdministraciones[] = [];

  searchBycodeActiveEnlace: IdataFiltersEnlaces[] = [];
  searchBycodeActiveSeccion: IdataFiltersApiAgregar[] = [];
  searchBycodeActiveGerencia: IdataFiltersApiAgregar[] = [];
  searchBycodeActiveDependencia: IdataFiltersApiAgregar[] = [];
  

  openFilter?: string; // busqueda por Filtro
  textInputFilter?: string;
  index = 'select an options';
  selectFilter?: IdataFiltersProperty[];
  sections?: number;
  dataItemsFilter?: IdataFiltersProperty[];

  constructor() {}
   /* CARGANDO TODOS LOS DATOS DE LA DB AL DOM */
  ngOnInit(): void {
   
/* GET API ENLACES */
    this._dataFilter
      .getApiEnlaces()
      .subscribe((res) => {
        this.getInfoEnlaces = res.map((res) => res);
      });
 /* GET API ADMINISTRACIONES*/
 this._dataFilter.getApiAdministraciones().subscribe((res) => {
  this.getInfoAdministraciones = res.map((res) => res);
});
/* GET API SECCIONES */
    this._dataFilter.getApis(this._selectApi.apiSecciones).subscribe((res) => {
      this.getInfoSecciones = res.map((res) => res);
    });
/* GET API GERENCIAS */
    this._dataFilter.getApis(this._selectApi.apiGerencias).subscribe((res) => {
      this.getInfoGerencias = res.map((res) => res);
    });
/* GET API DEPENDENCIAS */
    this._dataFilter
      .getApis(this._selectApi.apiDependencias)
      .subscribe((res) => {
        this.getInfoDependencias = res.map((res) => res);
      });
  }

  /* ******************************BUSQUEDA POR CODIGO S/N**************************** */

  btnSearchByCodes() {
    
      /* ENLACE */
    const enlaceByCodigoActivo = this.getInfoEnlaces?.filter(res => res.codigo_activo === this.searchByCode);
    if(enlaceByCodigoActivo.length != 0){
      [...this.searchBycodeActiveEnlace] = enlaceByCodigoActivo!; 
      /* id secciones */
        const enlaceByIdSecciones = enlaceByCodigoActivo![0].id_secciones;
      /* administraciones */
        const administracionByCodigoActivo = this.getInfoAdministraciones?.filter(res => res.id_secciones === enlaceByIdSecciones);
      /* SECCION */
        const seccionName = this.getInfoSecciones?.filter(res => res.id === parseInt(administracionByCodigoActivo![0].id_secciones));
        [...this.searchBycodeActiveSeccion] = seccionName!;
      /* GERENCIA */
        const gerenciaName = this.getInfoGerencias?.filter(res => res.id === parseInt(administracionByCodigoActivo![0].id_gerencias));
        [...this.searchBycodeActiveGerencia] = gerenciaName!;
      /* DEPENDENCIA */  
        const dependenciaName = this.getInfoDependencias?.filter(res => res.id === parseInt(administracionByCodigoActivo![0].id_dependencias));
        [...this.searchBycodeActiveDependencia] = dependenciaName!;    
    }else{
      alert("No se encontrarón resultados")
    }
    this.searchByCode = "";
  }

  /* ******************************BUSQUEDA POR FILTRO**************************** */
  /* SELECCIONA LA SECCION Y LA AGREGA A LA MIGAJA DE PAN O PAGINACIÓN EN CADA FILTRO */
  getBreadCrumb(index: string, event: Event) {
    let converSelectArea = event.target as HTMLSelectElement;
    let selectArea =
      converSelectArea.children[parseInt(index) + 1].textContent?.valueOf();
    this._dataFilter.setBreadCrumb(selectArea!);
  }

  /* FILTRA LOS DATOS CADA VEZ QUE EL USUARIO ESCRIBE EN EL INPUT Y LOS CONVIERTE A MINUSCULAS */
  getTextInputFilter(textInputFilter: string) {
    let iteratorItemsFilter = [];
    let converTextInputFilter = textInputFilter.trim().toLocaleLowerCase();

    const converSectionName = this.selectFilter?.map((section) => {
      return (section.name as string).toLowerCase();
    });

    for (const name in converSectionName!) {
      if (converSectionName[name].startsWith(converTextInputFilter)) {
        const dataItemsFilter = {
          id: parseInt(name),
          name: converSectionName[name].toUpperCase(),
        };
        iteratorItemsFilter.push(dataItemsFilter);
      }
    }
    this.dataItemsFilter = iteratorItemsFilter;
  }
  /* PERMITE EL INGRESO PARA SELECCIONAR EL AREA (PRINCIPAL,BOGOTÁ,NACIONAL,INTERNACIONAL)*/
  sectionFilter(index: string, event: Event): void {
    if (index != 'select an options') {
      this.getBreadCrumb(index, event);

      const { sections } = this._dataFilter.dataFilters[parseInt(index)];

      this.openFilter = 'sections';
      this.selectFilter = sections;
      this.getTextInputFilter('');
    }
  }
  /* SELECCIONANDO UN ELEMENTO DE LA SECCIÓN */
  selectSections(id: number) {
    const { host } = this._dataFilter.dataFilters[parseInt(this.index)];
    this.openFilter = 'host';
    this.sections = id;

    let dataHost = [];
    for (let i = 0; i < host[id].name.length; i++) {
      const dataItemsFilter: IdataFiltersProperty = {
        id: i,
        name: host[id].name[i],
      };
      dataHost.push(dataItemsFilter);
    }
    this.selectFilter = dataHost;
    this.getTextInputFilter('');
  }
  /* SELECCIONANDO UN ELEMENTO DE LOS HOST */
  selectHost(id: number) {
    const { host, accessPoint, printers, cameras, switches } =
      this._dataFilter.dataFilters[parseInt(this.index)];

    const selectHost = host[id].name[id].toLocaleLowerCase();

    if (selectHost == 'access point') {
      this.openFilter = 'accessPoint';
      this.typeHost(0, [accessPoint[this.sections!]]);
    } else if (selectHost == 'camaras') {
      this.openFilter = 'cameras';
      this.typeHost(0, [cameras[this.sections!]]);
    } else if (selectHost == 'impresoras') {
      this.openFilter = 'printers';
      this.typeHost(0, [printers[this.sections!]]);
    } else if (selectHost == 'switches') {
      this.openFilter = 'switches';
      this.typeHost(0, [switches[this.sections!]]);
    }
  }
  /* SELECCIONA LA IP */
  selectIp(id: number) {
    console.log(id);
  }
  /* PASANDO EL TYPO DE ELEMENTO SELECCIONADO YA SEA ACCESS POINT, CAMARAS, IMPRESORAS O SWITCHES*/
  typeHost(id: number, nameHost: IdataFiltersProperty[]) {
    let dataAccessPoint = [];
    for (let i = 0; i < nameHost[id].name.length; i++) {
      const dataItemsFilter: IdataFiltersProperty = {
        id: i,
        name: nameHost[id].name[i],
      };
      dataAccessPoint.push(dataItemsFilter);
    }
    this.selectFilter = dataAccessPoint;
    this.getTextInputFilter('');
  }
}
