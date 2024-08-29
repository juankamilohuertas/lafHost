import { inject, Injectable } from '@angular/core';
import { IdataFilters, IdataFiltersEnlaces } from '../../app_models/filter/search-and-filter.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataFilterService {
  /* API BUSQUEDA POR CODIGO */
  private readonly _ApiEnlaces = environment.apiEnlaces;
  constructor(private httpClient: HttpClient) {}
  /* GET */
  getApiEnlaces(){
    return this.httpClient.get<IdataFiltersEnlaces>(this._ApiEnlaces);
  }
  /* POST */
  postApiEnlaces(tipo_impresora: string,direccion_ip: string,codigo_activo: string,numero_serie: string,fecha: string){
    return this.httpClient.post<IdataFiltersEnlaces>(this._ApiEnlaces,{
      "tipo_impresora": tipo_impresora,
      "direccion_ip": direccion_ip,
      "codigo_activo": codigo_activo,
      "numero_serie": numero_serie,
      "fecha": fecha
    });
  }

/* ************************************************************************ */
  private _dataBehavior = new BehaviorSubject('');
  selectedFilterOptions$ = this._dataBehavior.asObservable();

  

  setBreadCrumb(newData: string) {
    this._dataBehavior.next(newData);
  }

  dataFilters: IdataFilters[] = [
    /* **************** Planta Principal *********************/
    {
      area: 'Planta Principal',
      sections: [
        { id: 0, name: 'Bodega Hilaza' },
        { id: 1, name: 'Calderas' },
        { id: 2, name: 'Contenedor' },
        { id: 3, name: 'Consultorio Médico' },
        { id: 4, name: 'Hilatura' },
        { id: 5, name: 'Laboratorio Textil' },
        { id: 6, name: 'Reciclaje Industrial' },
        { id: 7, name: 'Revisión de Hilos' },
        { id: 8, name: 'Revisión de Terminado' },
        { id: 9, name: 'Tecnologías de la Información' },
        { id: 10, name: 'Tejido Plano' },
        { id: 11, name: 'Texturizado' },
        { id: 12, name: 'Tintas Mesanine' },
      ],
      host: [
        {
          id: 0,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 1,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 2,
          name: ['Access Point', 'Camaras', 'Impresoras'],
        },
        {
          id: 3,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 4,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 5,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 6,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 7,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 8,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 9,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 10,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 11,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 12,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
      ],
      accessPoint: [
        {
          id: 0,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 1,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 2,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 3,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 4,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 5,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 6,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 7,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 8,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 9,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 10,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 11,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 12,
          name: ['Aruba', 'TP-Link'],
        },
      ],
      cameras: [
        {
          id: 0,
          name: ['tipo o marca de camara'],
        },
        {
          id: 1,
          name: ['tipo o marca de camara'],
        },
        {
          id: 2,
          name: ['tipo o marca de camara'],
        },
        {
          id: 3,
          name: ['tipo o marca de camara'],
        },
        {
          id: 4,
          name: ['tipo o marca de camara'],
        },
        {
          id: 5,
          name: ['tipo o marca de camara'],
        },
        {
          id: 6,
          name: ['tipo o marca de camara'],
        },
        {
          id: 7,
          name: ['tipo o marca de camara'],
        },
        {
          id: 8,
          name: ['tipo o marca de camara'],
        },
        {
          id: 9,
          name: ['tipo o marca de camara'],
        },
        {
          id: 10,
          name: ['tipo o marca de camara'],
        },
        {
          id: 11,
          name: ['tipo o marca de camara'],
        },
        {
          id: 12,
          name: ['tipo o marca de camara'],
        },
      ],
      printers: [
        {
          id: 0,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 1,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 2,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 3,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 4,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 5,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 6,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 7,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 8,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 9,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 10,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 11,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 12,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
      ],
      switches: [
        {
          id: 0,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 1,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 2,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 3,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 4,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 5,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 6,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 7,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 8,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 9,
          name: ['Gigabit', 'TrendNet'],
        },
        {
          id: 10,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 11,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 12,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
      ],
      ipPrinters: [
        {
          id: 0,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 1,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 2,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 3,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 4,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 5,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 6,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 7,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 8,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 9,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 10,
          name: ['#', '#', '#', '#', '#', 'http://172.20.124.59/'],
        },
        {
          id: 11,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 12,
          name: ['#', '#', '#', '#', '#', '#'],
        },
      ],
    },
    /* **************** PDV Bogotá ***************************/
    {
      area: 'PDV Bogotá',
      sections: [
        { id: 0, name: '7 De Agosto' },
        { id: 1, name: '150' },
        { id: 2, name: 'Alamos' },
        { id: 3, name: 'AV Boyacá' },
        { id: 4, name: 'Cajicá' },
        { id: 5, name: 'Cedritos' },
        { id: 6, name: 'Centro Nariño' },
        { id: 7, name: 'Ricaurte' },
        { id: 8, name: 'Soacha' },
        { id: 9, name: 'Suba' },
        { id: 10, name: 'Toberín' },
      ],
      host: [
        {
          id: 0,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 1,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 2,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 3,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 4,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 5,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 6,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 7,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 8,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 9,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 10,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
      ],
      accessPoint: [
        {
          id: 0,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 1,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 2,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 3,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 4,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 5,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 6,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 7,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 8,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 9,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 10,
          name: ['Aruba', 'TP-Link'],
        },
      ],
      cameras: [
        {
          id: 0,
          name: ['tipo o marca de camara'],
        },
        {
          id: 1,
          name: ['tipo o marca de camara'],
        },
        {
          id: 2,
          name: ['tipo o marca de camara'],
        },
        {
          id: 3,
          name: ['tipo o marca de camara'],
        },
        {
          id: 4,
          name: ['tipo o marca de camara'],
        },
        {
          id: 5,
          name: ['tipo o marca de camara'],
        },
        {
          id: 6,
          name: ['tipo o marca de camara'],
        },
        {
          id: 7,
          name: ['tipo o marca de camara'],
        },
        {
          id: 8,
          name: ['tipo o marca de camara'],
        },
        {
          id: 9,
          name: ['tipo o marca de camara'],
        },
        {
          id: 10,
          name: ['tipo o marca de camara'],
        },
      ],
      printers: [
        {
          id: 0,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 1,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 2,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 3,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 4,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 5,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 6,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 7,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 8,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 9,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 10,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
      ],
      switches: [
        {
          id: 0,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 1,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 2,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 3,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 4,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 5,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 6,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 7,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 8,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 9,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 10,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
      ],
      ipPrinters: [
        {
          id: 0,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 1,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 2,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 3,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 4,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 5,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 6,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 7,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 8,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 9,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 10,
          name: ['#', '#', '#', '#', '#', '#'],
        },
      ],
    },
    /* **************** PDV Nacionales ********************* */
    {
      area: 'PDV Nacionales',
      sections: [
        { id: 0, name: 'Barranquilla' },
        { id: 1, name: 'Bucaramanga' },
        { id: 2, name: 'Cali' },
        { id: 3, name: 'Cúcuta' },
        { id: 4, name: 'Ibagué' },
        { id: 5, name: 'Medellín' },
        { id: 6, name: 'Neiva' },
        { id: 7, name: 'Santa Marta' },
        { id: 8, name: 'Villavicencio' },
      ],
      host: [
        {
          id: 0,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 1,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 2,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 3,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 4,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 5,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 6,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 7,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 8,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
      ],
      accessPoint: [
        {
          id: 0,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 1,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 2,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 3,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 4,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 5,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 6,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 7,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 8,
          name: ['Aruba', 'TP-Link'],
        },
      ],
      cameras: [
        {
          id: 0,
          name: ['tipo o marca de camara'],
        },
        {
          id: 1,
          name: ['tipo o marca de camara'],
        },
        {
          id: 2,
          name: ['tipo o marca de camara'],
        },
        {
          id: 3,
          name: ['tipo o marca de camara'],
        },
        {
          id: 4,
          name: ['tipo o marca de camara'],
        },
        {
          id: 5,
          name: ['tipo o marca de camara'],
        },
        {
          id: 6,
          name: ['tipo o marca de camara'],
        },
        {
          id: 7,
          name: ['tipo o marca de camara'],
        },
        {
          id: 8,
          name: ['tipo o marca de camara'],
        },
      ],
      printers: [
        {
          id: 0,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 1,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 2,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 3,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 4,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 5,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 6,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 7,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 8,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
      ],
      switches: [
        {
          id: 0,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 1,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 2,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 3,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 4,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 5,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 6,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 7,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 8,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
      ],
      ipPrinters: [
        {
          id: 0,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 1,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 2,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 3,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 4,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 5,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 6,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 7,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 8,
          name: ['#', '#', '#', '#', '#', '#'],
        },
      ],
    },
    /* **************** PDV Internacionales***************** */
    {
      area: 'PDV Internacionales',
      sections: [
        { id: 0, name: 'Costa Rica' },
        { id: 1, name: 'Venezuela' },
        { id: 2, name: 'Ecuador' },
        { id: 3, name: 'Mexico' },
      ],
      host: [
        {
          id: 0,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 1,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 2,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
        {
          id: 3,
          name: ['Access Point', 'Camaras', 'Impresoras', 'Switches'],
        },
      ],
      accessPoint: [
        {
          id: 0,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 1,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 2,
          name: ['Aruba', 'TP-Link'],
        },
        {
          id: 3,
          name: ['Aruba', 'TP-Link'],
        },
      ],
      cameras: [
        {
          id: 0,
          name: ['tipo o marca de camara'],
        },
        {
          id: 1,
          name: ['tipo o marca de camara'],
        },
        {
          id: 2,
          name: ['tipo o marca de camara'],
        },
        {
          id: 3,
          name: ['tipo o marca de camara'],
        },
      ],
      printers: [
        {
          id: 0,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 1,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 2,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
        {
          id: 3,
          name: [
            'CL4NX SATO',
            'EPSON FS-2190',
            'EPSON FS 2190II',
            'EPSON FS-850',
            'EPSON TMU 220',
            'KYOCERA',
          ],
        },
      ],
      switches: [
        {
          id: 0,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 1,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 2,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
        {
          id: 3,
          name: ['Gigabit', 'TP-Link', 'TrendNet'],
        },
      ],
      ipPrinters: [
        {
          id: 0,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 1,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 2,
          name: ['#', '#', '#', '#', '#', '#'],
        },
        {
          id: 3,
          name: ['#', '#', '#', '#', '#', '#'],
        },
      ],
    },
  ];


  

}
