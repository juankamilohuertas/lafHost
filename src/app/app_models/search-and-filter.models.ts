export interface IdataFiltersProperty {
  id: number;
  name: string | string[];
}

export interface IdataFilters {
  area: string;
  sections: IdataFiltersProperty[];
  host: IdataFiltersProperty[];
  accessPoint: IdataFiltersProperty[];
  cameras: IdataFiltersProperty[];
  printers: IdataFiltersProperty[];
  switches: IdataFiltersProperty[];
}

export const dataFilters: IdataFilters[] = [
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
        name: ['Gigabit', 'TP-Link', 'TrendNet'],
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
  },
];
