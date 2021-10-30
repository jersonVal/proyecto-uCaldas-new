import {Model, model, property} from '@loopback/repository';

@model()
export class ArrayTipoComite extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  array_tipoComite: string[];

  @property({
    type: 'string',
    required: true,
  })
  id_solicitud: string;


  constructor(data?: Partial<ArrayTipoComite>) {
    super(data);
  }
}

export interface ArrayTipoComiteRelations {
  // describe navigational properties here
}

export type ArrayTipoComiteWithRelations = ArrayTipoComite & ArrayTipoComiteRelations;
