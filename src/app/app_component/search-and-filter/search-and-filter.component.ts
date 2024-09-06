import {
  IdataFiltersApiAgregar,
  IdataFiltersEnlaces,
  IdataFiltersProperty,
} from './../../app_models/filter/search-and-filter.models';
import { Component, inject } from '@angular/core';
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
export class SearchAndFilterComponent {
  private readonly _dataFilter = inject(DataFilterService);
  private readonly _selectApi = environment;
  searchType?: string = 'Buscar por...';
  searchByCode?: string; // busqueda por Codigo S/N
  getInfoEnlaces: IdataFiltersEnlaces[] = [];
  getInfoSecciones: IdataFiltersApiAgregar[] = [];

  openFilter?: string; // busqueda por Filtro
  textInputFilter?: string;
  index = 'select an options';
  selectFilter?: IdataFiltersProperty[];
  sections?: number;
  dataItemsFilter?: IdataFiltersProperty[];

  constructor() {}
  /* ******************************BUSQUEDA POR CODIGO S/N**************************** */
  
  btnSearchByCodes() {
    let getDataSecciones: IdataFiltersApiAgregar[] = [];

    this._dataFilter.getApis(this._selectApi.apiSecciones).subscribe((res) => {
      getDataSecciones = res.map((res) => res);
    });

      this._dataFilter.getApiEnlaces().subscribe((res) => {
        const getDataEnlaces = res.map((res) => res);
    
        const getCodigosActivosEnlaces = getDataEnlaces.map((res) => res.codigo_activo);

        if (getCodigosActivosEnlaces.indexOf(this.searchByCode!) != -1) {
          const getEnlace = getDataEnlaces.filter(
            (res) => res.codigo_activo == this.searchByCode
          );   
             
          getDataSecciones.filter((res) => {
            getEnlace.forEach(resp => {
              if (res.id == parseInt(resp.id_secciones)) {
                this.getInfoSecciones[0] = res;
                this.getInfoEnlaces[0] = getEnlace[0];
              }
            });
          });
        }
      });
    
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
