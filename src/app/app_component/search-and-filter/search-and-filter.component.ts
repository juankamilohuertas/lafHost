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
  index? = 'select an options';
  sections?: IdataFiltersProperty[];
  host?: IdataFiltersProperty;
  selectHost?: string[];
  ipHost?: any;

  dataItemsFilter?: IdataFiltersProperty[];

  constructor() {}

  /* PERMITE EL INGRESO PARA SELECCIONAR EL AREA (PRINCIPAL,BOGOTÁ,NACIONAL,INTERNACIONAL)*/
  sectionFilter(index: string, event: Event): void{
    if (index != 'select an options') {
       
      let converSelectArea = event.target as HTMLSelectElement
      let selectArea = converSelectArea.children[parseInt(index)+1].textContent?.valueOf()
      this._dataFilter.setBreadCrumb(selectArea!)

      const { sections } = this._dataFilter.dataFilters[parseInt(index)];
      this.sections = sections;
      this.getTextInputFilter('');
      this.openFilter = 'sections';
    }
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
  /* SELECCIONANDO UN ELEMENTO DE LA SECCIÓN */
  selectSections(id: number) {
    console.log(id);
  }
}
