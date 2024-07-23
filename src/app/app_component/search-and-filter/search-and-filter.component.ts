import { IdataFiltersProperty } from './../../app_models/search-and-filter.models';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataFilters } from '../../app_models/search-and-filter.models';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent {
  openFilter?: string;
  index? = 'select an options';
  sections?: IdataFiltersProperty[];
  host?: string[];
  selectHost?: string[];

  sectionFilter(index: string): void {
    const { sections } = dataFilters[parseInt(index)];
    this.sections = sections;
    this.openFilter = 'sections';
  }
  hostFilter(index: string, $index: number) {
    const { host } = dataFilters[parseInt(index)];
    const { name } = host[$index];
    this.host = [...name];
    this.openFilter = 'host';
  }
  selectHostFilter(index: string, $index: number, $name: string) {
    const { accessPoint, cameras, printers, switches } =
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
