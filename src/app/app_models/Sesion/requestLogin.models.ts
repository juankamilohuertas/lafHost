export interface requestLogin{
    usuario: string,
    password: string
}

export interface requestApiCentauro{
httpStatus: number,
message: string,
result: object,
serverTime: Date,
token: object,
type: string
}