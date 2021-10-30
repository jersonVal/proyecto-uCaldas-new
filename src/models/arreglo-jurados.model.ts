import {Model, model, property} from '@loopback/repository';

@model()
export class ArregloJurados extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  arreglo_jurados: string[];


  constructor(data?: Partial<ArregloJurados>) {
    super(data);
  }
}

export interface ArregloJuradosRelations {
  // describe navigational properties here
}

export type ArregloJuradosWithRelations = ArregloJurados & ArregloJuradosRelations;
