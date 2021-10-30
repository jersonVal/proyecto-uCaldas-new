import {Model, model, property} from '@loopback/repository';

@model()
export class ArraySolicitudesProponente extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  array_solicitudes: string[];

  @property({
    type: 'string',
    required: true,
  })
  id_proponente: string;


  constructor(data?: Partial<ArraySolicitudesProponente>) {
    super(data);
  }
}

export interface ArraySolicitudesProponenteRelations {
  // describe navigational properties here
}

export type ArraySolicitudesProponenteWithRelations = ArraySolicitudesProponente & ArraySolicitudesProponenteRelations;
