import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IdataFilter } from '../../app_models/search-and-filter.models';
import { dataFilter } from '../../app_models/search-and-filter.models';
import { Console } from 'console';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent {
  openFilter?: number;
  selectFilter!: string;
  selectFilterSection?: IdataFilter;
  selectFilterHost?: string[];
  selectFilterPrinter?: string[];

  selectFilter1(selectFilter: string): void {
    const converSelectFilter = parseInt(selectFilter);
    this.selectFilterSection = dataFilter[converSelectFilter];
    this.openFilter = 1
  }
  selectFilter2(index: number) {
    this.selectFilterHost = this.selectFilterSection?.host[index];
    this.openFilter = 2
    
  }
  selectFilter3(index: number) {
    this.selectFilterPrinter = this.selectFilterSection?.printer[index];
    this.openFilter = 3
    console.log(this.selectFilterPrinter,index)
  }

}
