import { Component, inject, input, OnInit } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import {
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';

@Component({
  selector: 'app-opt-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './opt-configuration.component.html',
  styleUrl: './opt-configuration.component.sass',
})
export class OptConfigurationComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  private readonly _selectApi = environment;
  inputText = ''; //lo que el usuario escribe en el input
  nameForm!: string; //nombre del formulario seleccionado
  idResponsableOrHost = `Nombre de seccion`; //valor seleccionado del formulario responsable
  idHost = `Nombre de host`; //valor seleccionado del formulario responsable
  getDBSections: IfiltersSecciones[] = []; // trae todos los registros de la tabla secciones
  getDBhost: IfiltersTipoHosts[] = []; // trae todos los registros de la tabla typeHost
  constructor() {}
  ngOnInit(): void {
    /* get db secciones */
    this._serviceDataFilter.getSeccionesApi().subscribe((res) => {
      this.getDBSections = res;
    });
    /* get db typehost */
    this._serviceDataFilter.getTypeHostApi().subscribe((res) => {
      this.getDBhost = res;
    });
  }
  /* SELECCIONANDO EL FORMULARIO, SECCIÓN O RESPONSABLE*/
  addNew(agregar: string) {
    this.nameForm = agregar;
    const elementResponsable = document.querySelector(
      '.nameSelectResponsable'
    ) as HTMLSelectElement;
    const elementSeccionOrHost = document.querySelector(
      '.nameSeccionOrHost'
    ) as HTMLSelectElement;
    document
      .querySelector('.nameSeccionOrHost')
      ?.classList.add('validateInput');
    if (agregar == 'seccion') {
      elementSeccionOrHost.style.display = 'block';
      elementResponsable.style.display = 'none';
    } else if (agregar == 'responsable') {
      this.idResponsableOrHost = `Nombre de seccion`;
      elementSeccionOrHost.style.display = 'block';
      elementResponsable.style.display = 'block';
    } else if (agregar == 'host') {
      this.idResponsableOrHost = `Nombre de host`;
      elementResponsable.style.display = 'none';
      elementSeccionOrHost.style.display = 'block';
    }
  }

  /*BOTON GUARDAR CAMBIOS, CREA UN REGISTRO A LAS TABLAS SECCIONES O RESPONSABLES */
  submitInfo() {
    const expSecciones = /^[A-Za-z0-9][A-Za-z0-9\s]*[A-Za-z0-9]$/;
    if (!expSecciones.test(this.inputText) || this.inputText == '') {
      document
        .querySelector('.nameSeccionOrHost')!
        .classList.add('validateInput');
    } else {
      document
        .querySelector('.nameSeccionOrHost')!
        .classList.remove('validateInput');
      if (this.nameForm == 'seccion') {
        /* POST CREAR NUEVA SECCION */
        this._serviceDataFilter.postSeccionesApi(this.inputText).subscribe();
        alert(`${this.nameForm} se creo con exito!`);
        this.inputText = '';
      } else if (this.nameForm == 'host') {
        /* POST CREAR NUEVO TIPOHOST */
        this._serviceDataFilter.postTypeHostApi(this.inputText).subscribe();
        alert(`${this.nameForm} se creo con exito!`);
        this.inputText = '';
      } else if (this.nameForm == 'responsable') {
        if (this.idResponsableOrHost !== 'Nombre de seccion') {
          /* POST CREAR NUEVO RESPONSABLE */
          document
            .querySelector('.nombreSelectResponsable')
            ?.classList.remove('validateInput');
          this._serviceDataFilter
            .postResponsablesApi(
              this.inputText,
              parseInt(this.idResponsableOrHost)
            )
            .subscribe();
          alert('El responsable se creo con exito!');
          this.inputText = '';
          this.idResponsableOrHost = 'Nombre de seccion';
        } else {
          document
            .querySelector('.nombreSelectResponsable')
            ?.classList.add('validateInput');
        }
      }
    }
  }
}
