import { LowerCasePipe } from "@angular/common";

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


