import { IdataFiltersProperty } from '../../app_models/filter/search-and-filter.models';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';


@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent {
  private readonly _dataFilter = inject(DataFilterService);
  searchType?: string = 'Buscar por...';
  openFilter?: string;
  textInputFilter?: string;
  index = 'select an options';
  sections?: IdataFiltersProperty[];
  host?: IdataFiltersProperty;
  ipHost?: any;

  dataItemsFilter?: IdataFiltersProperty[];

  constructor() {}

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

    const converSectionName = this.sections?.map((section) => {
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
        this.sections = sections;
        this.getTextInputFilter('');
      }
    }
  /* SELECCIONANDO UN ELEMENTO DE LA SECCIÓN */
  selectSections(id: number) {
    const { host } = this._dataFilter.dataFilters[parseInt(this.index)];
    this.openFilter = 'host';

    let dataHost = [];
    for (let i = 0; i < host[id].name.length; i++) {
      const dataItemsFilter: IdataFiltersProperty = {
        id: i,
        name: host[id].name[i],
      };
      dataHost.push(dataItemsFilter);
    }
    this.sections = dataHost;
    this.getTextInputFilter('');
  }
  /* SELECCIONANDO UN ELEMENTO DE LOS HOST */
  selectHost(id: number){
    const { } = this._dataFilter.dataFilters[parseInt(this.index)];

    if(id == 0){

    }else if(id == 1){

    }else if(id == 2){

    }else if(id == 3){

    }
  }
    
}
