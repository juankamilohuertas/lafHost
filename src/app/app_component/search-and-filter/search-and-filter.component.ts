import { IdataFiltersProperty } from './../../app_models/search-and-filter.models';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataFilters } from '../../app_models/search-and-filter.models';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule,BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent {
  searchType?: string = "Buscar por...";
  openFilter?: string;
  index? = 'select an options';
  sections?: IdataFiltersProperty[];
  host?: string[];
  selectHost?: string[];
  ipHost?: string[]; 
  
  sectionFilter(index: string): void {
    if(index != 'select an options'){
      const { sections } = dataFilters[parseInt(index)];
      this.sections = sections;
      this.openFilter = 'sections';
    }
    
  }
  hostFilter(index: string, $id: number) {
    const { host } = dataFilters[parseInt(index)];
    const { name,id } = host[$id];
    this.host = [...name];
    this.openFilter = 'host';
  }
  selectHostFilter(index: string, $index: number, $name: string) {
    const { accessPoint, cameras, printers, switches, ip } =
      dataFilters[parseInt(index)];
    this.openFilter = 'selectHost';
    switch ($name) {
      case 'Access Point':
        this.selectHost = [...accessPoint[$index].name];
        break;
      case 'Camaras':
        this.selectHost = [...cameras[$index].name];
        break;
      case 'Impresoras':
        this.ipHost = [...ip[$index].name]
        console.log($index)
        this.selectHost = [...printers[$index].name];
        break;
      case 'Switches':
        this.selectHost = [...switches[$index].name];
        break;
      default:
        break;
    }
  }
}
