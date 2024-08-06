export interface IrequestLogin {
  users: string;
  passworlds: string;
}

export interface IrequestApiCentauro {
  httpStatus: number;
  message: string;
  result: IrequestUser;
  serverTime: Date;
  token: object;
  type: string;
}

export interface IrequestUser{
  codigo_user: string,
  observacion: string
  usuario: string
}

