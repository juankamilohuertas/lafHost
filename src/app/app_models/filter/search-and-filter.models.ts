export interface IdataFiltersImpresoras {
  Id: number;
  nombre: string;
}

export interface IdataFiltersEnlaces {
  Id: number;
  id_secciones: string;
  id_impresoras: string;
  direccion_ip: string;
  codigo_activo: string;
  numero_serie: string;
  fecha: string;
}

export interface IdataFiltersApiAgregar {
  id: number;
  nombre: string;
}

export interface IdataFiltersGerencias {
  Id: number;
  nombre: string;
}

export interface IdataFiltersDependencias {
  Id: number;
  nombre: string;
}

export interface IdataFiltersAdministraciones {
  Id: number;
  id_secciones: string;
  id_gerencias: string;
  id_dependencias: string;
}
/* ****************************************************** */

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


