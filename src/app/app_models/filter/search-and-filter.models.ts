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
  codigoCentauro: number,
  nombreResponsable: string,
  idSeccion: number
}
/* actualiza la toda la db */
export interface IfiltersActualizarDesdeArchivo{
  "id": number,
  "codigoActivo": string,
  "nombreSeccion": string,
  "codigoNomina": string,
  "nombreResponsable": string,
  "nombreTipoHost": string,
  "numeroSerie": string,
  "descripcion": string,
  "direccionIp": string,
  "fecha": string,
  "estado": string
}