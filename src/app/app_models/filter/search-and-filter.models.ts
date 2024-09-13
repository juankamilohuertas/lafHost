export interface IfiltersTipoHosts {
  id: number;
  nombreTipoHost: string
}
export interface IfiltersEnlaces{
  id: 0,
  codigoActivo: string,
  idSeccion: number,
  idResponsable: number,
  idTipoHost: number,
  numeroSerie: string,
  descripcion: string,
  direccionIp: string,
  fecha: string
}
export interface IfiltersSecciones{
  id: number,
  nombreSeccion: string
}
export interface IfiltersResponsables{
  id: number,
  nombreResponsable: string,
  idSeccion: number
}
