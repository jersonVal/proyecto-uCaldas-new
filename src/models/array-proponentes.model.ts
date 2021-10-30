import {Model, model, property} from '@loopback/repository';

@model()
export class ArrayProponentes extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  array_proponentes: string[];

  @property({
    type: 'string',
    required: true,
  })
  id_solicitud: string;


  constructor(data?: Partial<ArrayProponentes>) {
    super(data);
  }
}

export interface ArrayProponentesRelations {
  // describe navigational properties here
}

export type ArrayProponentesWithRelations = ArrayProponentes & ArrayProponentesRelations;
