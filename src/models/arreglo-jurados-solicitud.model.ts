import {Model, model, property} from '@loopback/repository';

@model()
export class ArregloJuradosSolicitud extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  arreglo_jurados: string[];


  constructor(data?: Partial<ArregloJuradosSolicitud>) {
    super(data);
  }
}

export interface ArregloJuradosSolicitudRelations {
  // describe navigational properties here
}

export type ArregloJuradosSolicitudWithRelations = ArregloJuradosSolicitud & ArregloJuradosSolicitudRelations;
