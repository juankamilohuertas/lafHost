import { map } from 'rxjs';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { environment } from '../../../environments/environment';
import {
  IfiltersResponsables,
  IfiltersSecciones,
} from '../../app_models/filter/search-and-filter.models';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.sass',
})
export class SearchAndFilterComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);

  searchType: string = 'Buscar por...';
  searchByCode?: string; // busqueda por Codigo S/N

  /* variables para crear un nuevo host */
  codigo_activo?: string;
  id_seccion = 'nombre de sección';
  id_host = "tipo de host"
  numero_serie = ""
  descripcion = ""
  direccion_ip = ""
  fecha_compra = ""

  /* variables que obtienen los resultados desde la db */
  getDbSecciones: IfiltersSecciones[] = [];
  getDbResponsables: IfiltersResponsables[] = [];

  constructor() {}
  
  ngOnInit(): void {
    /* get db secciones*/
    this._serviceDataFilter.getSeccionesApi().subscribe((res) => {
      this.getDbSecciones = res;
    });
    /* get db responsables */
    this._serviceDataFilter.getResponsablesApi().subscribe((res) => {
      this.getDbResponsables = res;
    });
  }

  /* crea un host */
  openNewHost() {
    
  }
  /* valida los campos cuando se crea un host */
  validateInputs(event: Event,valueInput: string,nameInput: string) {
    const elementValidate = event.target as HTMLElement;
    if(valueInput != "nombre de sección" && valueInput != "tipo de host"){
      elementValidate.classList.remove("validateInput");
    }else{
      elementValidate.classList.add("validateInput");
    }

    if(nameInput == "codigo activo"){
      const expCodigoActivo = /^\d{5,}$/
     if(!expCodigoActivo.test(valueInput)){
       elementValidate.classList.add("validateInput");
     }else{
       elementValidate.classList.remove("validateInput");
     }
    }

    if(nameInput == "direccion ip"){
      const expDireccionIp =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/;
      if(!expDireccionIp.test(valueInput)){
        elementValidate.classList.add("validateInput");
      }else{
        elementValidate.classList.remove("validateInput");
      }
    }
  }

  postNewHost(){
    const allElements = document.querySelectorAll(".validateInput");
    if(allElements.length === 0){

    }
  }


  /* ************************************************************* */
  /* buscar el codigo*/
  btnSearchByCodes() {}

  /* Presionando la tecla enter hace la busqueda por codigo activo */
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
    }
  }
}
