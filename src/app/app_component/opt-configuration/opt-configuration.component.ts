import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Component, inject } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import { IdataFiltersEnlaces } from '../../app_models/filter/search-and-filter.models';

@Component({
  selector: 'app-opt-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './opt-configuration.component.html',
  styleUrl: './opt-configuration.component.sass'
})
export class OptConfigurationComponent {
  private readonly _dataFilter = inject(DataFilterService);
  
  selectPrint = "Tipo de Impresora";
  direccion_ip!: string;
  codigo_activo!: string;
  numero_serie!: string;
  fecha!: string;

  searchDataEnlaces(){
    this._dataFilter.postApiEnlaces(this.selectPrint,this.direccion_ip,this.codigo_activo,this.numero_serie,this.fecha).subscribe(r => console.log(r))
  }

  postSubmitEnlaces(){
    /* this._dataFilter.postApiEnlaces() */
  }
}
