
export interface Cupon { 
    cupon_id : number,
    servicio_id : number,
    tipo_valor : number,
    valor: number,
    fecha_desde : string,
    fecha_hasta : string,
    status: number
}