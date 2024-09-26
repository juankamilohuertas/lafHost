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
  breadCrumb!: string;
  urlBreadCrum = "";
  constructor(){}

  ngOnInit(): void {
      this._dataFilter.selectedFilterOptions$.subscribe(v => {
        this.breadCrumb = v
        if(v == "Opciones de configuración"){
          this.urlBreadCrum = "http://localhost:4200/panel/configuration";
        }else if(v == "Lista de dispositivos"){
          this.urlBreadCrum = "http://localhost:4200/panel/configuration";
        }
      });  
  }


  
}
