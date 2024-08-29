export interface IdataFiltersEnlaces {
  Id: number;
  id_impresoras: number;
  direccion_ip: string;
  codigo_activo: string;
  numero_serie: string;
}

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
  ipPrinters: IdataFiltersProperty[];
}


