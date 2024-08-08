import { Component, inject, OnInit } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.sass',
})
export class BreadCrumbComponent implements OnInit {
  private readonly _dataFilter = inject(DataFilterService);
  breadCrumb?: string

  constructor(){}

  ngOnInit(): void {
    this._dataFilter.selectedFilterOptions$.subscribe(v => {
      this.breadCrumb = v
    });
  }


  
}
