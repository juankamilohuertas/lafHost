import { Component, inject, input, OnInit } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { IfiltersSecciones } from '../../app_models/filter/search-and-filter.models';

@Component({
  selector: 'app-opt-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './opt-configuration.component.html',
  styleUrl: './opt-configuration.component.sass',
})
export class OptConfigurationComponent {
  private readonly _serviceDataFilter = inject(DataFilterService);
  private readonly _selectApi = environment;
  inputText = ''; //lo que el usuario escribe en el input
  nameForm!: string; //nombre del formulario seleccionado
  idResponsable = 'Nombre de seccion'; //valor seleccionado del formulario responsable
  getDBSections: IfiltersSecciones[] = []; // trae todos los registros de la tabla secciones

  constructor() {}
  /* SELECCIONANDO EL FORMULARIO, SECCIÓN O RESPONSABLE*/
  addNew(agregar: string) {
    this.nameForm = agregar;
    const elementResponsable = document.querySelector(
      '.nombreSelectResponsable'
    ) as HTMLSelectElement;
    document
      .querySelector('.nombreInputSeccion')
      ?.classList.add('validateInput');
    if (agregar == 'seccion') {
      elementResponsable.style.display = 'none';
    } else if (agregar == 'responsable') {
      elementResponsable.style.display = 'block';
      this._serviceDataFilter.getSeccionesApi().subscribe((res) => {
        this.getDBSections = res;
      });
    }
  }

  /*BOTON GUARDAR CAMBIOS, CREA UN REGISTRO A LAS TABLAS SECCIONES O RESPONSABLES */
  submitInfo() {
    const expSecciones = /^[A-Za-z0-9][A-Za-z0-9\s]*[A-Za-z0-9]$/;
    if (!expSecciones.test(this.inputText) || this.inputText == '') {
      document
        .querySelector('.nombreInputSeccion')!
        .classList.add('validateInput');
    } else {
      document
        .querySelector('.nombreInputSeccion')!
        .classList.remove('validateInput');
      if (this.nameForm == 'seccion') {
        /* POST CREAR NUEVA SECCION */
        this._serviceDataFilter.postSeccionesApi(this.inputText).subscribe();
        alert('La seccion se creo con exito!');
        this.inputText = '';
      } else if (this.nameForm == 'responsable') {
        if (this.idResponsable == 'Nombre de seccion') {
          document
            .querySelector('.nombreSelectResponsable')
            ?.classList.add('validateInput');
        } else {
          /* POST CREAR NUEVO RESPONSABLE */
          document
            .querySelector('.nombreSelectResponsable')
            ?.classList.remove('validateInput');
          this._serviceDataFilter
            .postResponsablesApi(this.inputText, parseInt(this.idResponsable))
            .subscribe();
          alert('El responsable se creo con exito!');
          this.inputText = '';
          this.idResponsable = 'Nombre de seccion';
        }
      }
    }
  }
}
