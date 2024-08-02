export interface IrequestLogin {
  users: string;
  passworlds: string;
}

export interface IrequestApiCentauro {
  httpStatus: number;
  message: string;
  result: object;
  serverTime: Date;
  token: object;
  type: string;
}
