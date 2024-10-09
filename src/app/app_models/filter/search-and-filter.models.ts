export interface IfiltersActualizarIps {
  id: number,
  activosId: string,
  direccionIp: string
}
export interface IfiltersActivosFijosManuales{
  id: number,
  codigoActivo: string,
  nombreSeccion: string,
  codigoNomina: string,
  nombreResponsable: string,
  nombreTipoHost: string,
  numeroSerie: string,
  descripcion: string,
  direccionIp: string,
  fecha: string,
  estado: string
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
