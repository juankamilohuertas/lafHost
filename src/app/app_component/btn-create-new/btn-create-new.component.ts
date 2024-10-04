import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import { DataFilterService } from '../../app_services/filter/data-filter.service';
import { IfiltersActivosFijosManuales } from '../../app_models/filter/search-and-filter.models';
import { FilesService } from '../../app_services/files/files.service';

@Component({
  selector: 'app-btn-create-new',
  standalone: true,
  imports: [FormsModule, BreadCrumbComponent],
  templateUrl: './btn-create-new.component.html',
  styleUrl: './btn-create-new.component.sass',
})
export class BtncreateNewComponent implements OnInit {
  private readonly _serviceDataFilter = inject(DataFilterService);
  private readonly _serviceDataFiles = inject(FilesService);
  selectTypeSearch = '';

  /* variables para crear un nuevo host */
  codigo_activo = '';
  nombre_seccion = '';
  codigo_nomina = '';
  nombre_responsable = '';
  nombre_dispositivo = '';
  numero_serie = '';
  descripcion = '';
  direccion_ip = '';
  fecha_compra = '';
  estado = 'estado';

  /* variables que obtienen los resultados desde la db */
  getDbActivosFijosManuales: IfiltersActivosFijosManuales[] = [];

  /* variables que obtienen los resultados de la db filtrados */
  getDbSeccionesFilters: string[] = [];
  getDbResponsablesFilters: string[] = [];
  getDbDispositivosFilters: string[] = [];
  /* ***************************** */
  getDbCodigoActivoFilters: string[] = [];
  getDbDireccionIpFilters: string[] = [];

  ngOnInit(): void {
    /* obtener solo los (nombresSecciones)*/
    const seccion: Set<string> = new Set();
    this._serviceDataFiles.getApiFile().subscribe((res) => {
      res.map((res) => seccion.add(res.nombreSeccion));
      this.getDbSeccionesFilters = [...seccion];
    });
    /* obtener solo los (nombresResponsables)*/
    const responsable: Set<string> = new Set();
    this._serviceDataFiles.getApiFile().subscribe((res) => {
      res.map((res) => responsable.add(res.nombreResponsable));
      this.getDbResponsablesFilters = [...responsable];
    });

    /* obtener solo los (nombresDispositivos)*/
    const dispositivo: Set<string> = new Set();
    this._serviceDataFiles.getApiFile().subscribe((res) => {
      res.map((res) => dispositivo.add(res.nombreTipoHost));
      this.getDbDispositivosFilters = [...dispositivo];
    });
    /* ********************************************** */
    const codigoActivo: Set<string> = new Set();
    this._serviceDataFilter.getActivosFijosManualesApi().subscribe((res) => {
      res.map((res) => codigoActivo.add(res.codigoActivo));
      this.getDbCodigoActivoFilters = [...codigoActivo];
    });

    const direccionIp: Set<string> = new Set();
    this._serviceDataFilter.getActivosFijosManualesApi().subscribe((res) => {
      res.map((res) => direccionIp.add(res.direccionIp));
      this.getDbDireccionIpFilters = [...direccionIp];
    });
  }

  /* valida los campos cuando antes de crear un nuevo dispositivo */
  validateAllInputs = 0;
  validateInputs(event: Event, valueInput: string, nameInput: string) {
    const expFormCreateNewHost = {
      codigoActivo: [/^\d{2,}$/],
      nombreSeccion: [/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9][a-zA-Z0-9\s]{0,99}$/],
      codigoNomina: [/^\d{3,10}$/],
      nombreResponsable: [/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9][a-zA-Z0-9\s]{1,100}$/],
      nombreDispositivo: [/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9][a-zA-Z0-9\s]{1,100}$/],
      numeroSerie: [/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{1,30}$/],
      descripcion: [/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{1,50}$/],
      direccionIp: [
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:|[0-9a-fA-F]{1,4}:){1,7}$/,
      ],
      fechaCompra: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/],
      estado: [/^(ACTIVO|INACTIVO)$/],
    };
    switch (nameInput) {
      case 'codigo_activo':
        /* no se repita el codigo activo */
        const noRepeatCodigoActivo = this.getDbCodigoActivoFilters.find(
          (res) => this.codigo_activo == res
        );
        if (noRepeatCodigoActivo !== undefined) {
          this.validateByStyle(event, 1, 'error');
          alert('El codigo activo ya existe');
        } else {
          !expFormCreateNewHost.codigoActivo[0].test(this.codigo_activo)
            ? this.validateByStyle(event, 1, 'error')
            : this.validateByStyle(event, 1, '');
        }
        break;
      case 'nombre_seccion':
        !expFormCreateNewHost.nombreSeccion[0].test(this.nombre_seccion)
          ? this.validateByStyle(event, 2, 'error')
          : this.validateByStyle(event, 2, '');
        break;
      case 'codigo_nomina':
        !expFormCreateNewHost.codigoNomina[0].test(this.codigo_nomina)
          ? this.validateByStyle(event, 3, 'error')
          : this.validateByStyle(event, 3, '');
        break;
      case 'nombre_responsable':
        !expFormCreateNewHost.nombreResponsable[0].test(this.nombre_responsable)
          ? this.validateByStyle(event, 4, 'error')
          : this.validateByStyle(event, 4, '');
        break;
      case 'nombre_dispositivo':
        !expFormCreateNewHost.nombreDispositivo[0].test(this.nombre_dispositivo)
          ? this.validateByStyle(event, 5, 'error')
          : this.validateByStyle(event, 5, '');
        break;
      case 'numero_serie':
        !expFormCreateNewHost.numeroSerie[0].test(this.numero_serie)
          ? this.validateByStyle(event, 6, 'error')
          : this.validateByStyle(event, 6, '');
        break;
      case 'descripcion':
        !expFormCreateNewHost.descripcion[0].test(this.descripcion)
          ? this.validateByStyle(event, 7, 'error')
          : this.validateByStyle(event, 7, '');
        break;
      case 'direccion_ip':
        /* no se repita la dirección ip */
        const noRepeatDireccionIp = this.getDbDireccionIpFilters.find(res => this.direccion_ip === res)
        if(noRepeatDireccionIp != undefined){
         alert("La dirección Ip ya existe");
         this.validateByStyle(event, 8, 'error');
        }else{
          !expFormCreateNewHost.direccionIp[0].test(this.direccion_ip)
          ? this.validateByStyle(event, 8, 'error')
          : this.validateByStyle(event, 8, '');
        }
        break;
      case 'fecha_compra':
        !expFormCreateNewHost.fechaCompra[0].test(this.fecha_compra)
          ? this.validateByStyle(event, 9, 'error')
          : this.validateByStyle(event, 9, '');
        break;
      case 'estado':
        !expFormCreateNewHost.estado[0].test(this.estado)
          ? this.validateByStyle(event, 10, 'error')
          : this.validateByStyle(event, 10, '');
        break;
    }
  }
  /* validar campos por estilos */
  allValuesValidates: Set<number> = new Set();
  allInputs: number[] = [];
  validateByStyle(element: Event, validate: number, message: string) {
    this.allInputs[0] = validate;
    if (message !== 'error') {
      (element.target as HTMLInputElement).classList.remove('validateInput');
      this.allValuesValidates.add(
        Array.from(this.allInputs)[this.allInputs.length - 1]
      );
    } else if (
      Array.from(this.allValuesValidates).indexOf(this.allInputs[0]) != -1 &&
      message === 'error'
    ) {
      (element.target as HTMLInputElement).classList.add('validateInput');
      this.allValuesValidates.delete(this.allInputs[0]);
    }
  }
  /* crea un nuevo registro  */
  postNewHost() {
    if (this.allValuesValidates.size === 10) {
      this._serviceDataFilter
        .postActivosFijosManualesApi(
          this.codigo_activo,
          this.nombre_seccion,
          this.codigo_nomina,
          this.nombre_responsable,
          this.nombre_dispositivo,
          this.numero_serie,
          this.descripcion,
          this.direccion_ip,
          this.fecha_compra,
          this.estado
        )
        .subscribe();
      alert('El dispositivo se creo correctamente');
    } else {
      alert('llena todos los campos');
    }

    /* actualizando los registros de la tabla enlaces */
    this._serviceDataFilter.getActivosFijosManualesApi().subscribe((res) => {
      this.getDbActivosFijosManuales = res;
    });
  }
}
