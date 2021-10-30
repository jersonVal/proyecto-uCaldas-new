import {Model, model, property} from '@loopback/repository';

@model()
export class ArregloJuradosSolicitud extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  arreglo_jurados: string[];

  @property({
    type: 'string',
    required: true,
  })
  id_solicitudResultado: string;


  constructor(data?: Partial<ArregloJuradosSolicitud>) {
    super(data);
  }
}

export interface ArregloJuradosSolicitudRelations {
  // describe navigational properties here
}

export type ArregloJuradosSolicitudWithRelations = ArregloJuradosSolicitud & ArregloJuradosSolicitudRelations;
