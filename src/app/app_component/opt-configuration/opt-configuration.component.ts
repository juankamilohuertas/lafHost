import { Component, inject, OnInit } from '@angular/core';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { FormsModule } from '@angular/forms';
import {
  IfiltersSecciones,
  IfiltersTipoHosts,
} from '../../app_models/filter/search-and-filter.models';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-opt-configuration',
  standalone: true,
  imports: [FormsModule,BreadCrumbComponent],
  templateUrl: './opt-configuration.component.html',
  styleUrl: './opt-configuration.component.sass',
})
export class OptConfigurationComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  inputText = ''; //lo que el usuario escribe en el input seccion
  inputTextCentauro = ''; //lo que el usuario escribe en el input Usuario Centauro
  nameForm!: string; //nombre del formulario seleccionado
  idResponsableOrHost = `Nombre de seccion`; //valor seleccionado del formulario responsable
  idHost = `Nombre de host`; //valor seleccionado del formulario responsable
  getDBSecciones: IfiltersSecciones[] = []; // trae todos los registros de la tabla secciones
  getDBhost: IfiltersTipoHosts[] = []; // trae todos los registros de la tabla typeHost
  getDBcodigoCentauro: number[] = []; // trae los registros de la columna CodigoCentauro de la tabla Responsable
  constructor() {}
  ngOnInit(): void {
    this._serviceDataFilter.setBreadCrumb("Opciones de configuración");
    /* get db secciones */
    this._serviceDataFilter.getSeccionesApi().subscribe((res) => {
      this.getDBSecciones = res;
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
    const elementUserCentauro = document.querySelector(
      '.nameUserCentauro'
    ) as HTMLSelectElement;
    document
      .querySelector('.nameSeccionOrHost')
      ?.classList.add('validateInput');
    document.querySelector('.nameUserCentauro')?.classList.add('validateInput');
    if (agregar == 'seccion') {
      elementSeccionOrHost.style.display = 'block';
      elementResponsable.style.display = 'none';
      elementUserCentauro.style.display = 'none';
    } else if (agregar == 'responsable') {
      this.idResponsableOrHost = `Nombre de seccion`;
      elementSeccionOrHost.style.display = 'block';
      elementResponsable.style.display = 'block';
      elementUserCentauro.style.display = 'block';
       /* get db responsables */
     this._serviceDataFilter.getResponsablesApi().subscribe((res) => {
      res.map(res => {
        this.getDBcodigoCentauro.push(res.codigoCentauro);
      })
      
    });
    } else if (agregar == 'host') {
      this.idResponsableOrHost = `Nombre de host`;
      elementResponsable.style.display = 'none';
      elementUserCentauro.style.display = 'none';
      elementSeccionOrHost.style.display = 'block';
    }
  }

  /*BOTON GUARDAR CAMBIOS, CREA UN REGISTRO A LAS TABLAS SECCIONES, RESPONSABLES O TYPEHOST*/
  submitInfo() {
    const expSecciones = /^[A-Za-z0-9][A-Za-z0-9\s]*[A-Za-z0-9]$/;
    const expCodigoCentauro = /^\d{3,}$/;
    const validateCodigoCentauro = this.getDBcodigoCentauro.filter(res => res == parseInt(this.inputTextCentauro));
    if(validateCodigoCentauro.length != 0){
      alert("El codigo de centauro ya existe");
      document
        .querySelector('.nameUserCentauro')!
        .classList.add('validateInput');
      }
      
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
              parseInt(this.inputTextCentauro),
              this.inputText,
              parseInt(this.idResponsableOrHost)
            )
            .subscribe();
          alert('El responsable se creo con exito!');
          this.inputTextCentauro = '';
          this.inputText = '';
          this.idResponsableOrHost = 'Nombre de seccion';
        } else {
          document
            .querySelector('.nombreSelectResponsable')
            ?.classList.add('validateInput');
        }
      }
      
    if (!expSecciones.test(this.inputText) || this.inputText == '') {
      document
        .querySelector('.nameSeccionOrHost')!
        .classList.add('validateInput');
    } else if (!expCodigoCentauro.test(this.inputTextCentauro) || this.inputTextCentauro == '') {
      document
        .querySelector('.nameUserCentauro')!
        .classList.add('validateInput');
    } else {
      document
        .querySelector('.nameSeccionOrHost')!
        .classList.remove('validateInput');
      document
        .querySelector('.nameUserCentauro')!
        .classList.remove('validateInput');

      
    }
  }
}
