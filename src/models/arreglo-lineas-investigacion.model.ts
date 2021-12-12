import {Model, model, property} from '@loopback/repository';

@model()
export class ArregloLineasInvestigacion extends Model {
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  lineas_investigacion: string[];

  @property({
    type: 'string',
    required: true,
  })
  id_jurado: string;




  constructor(data?: Partial<ArregloLineasInvestigacion>) {
    super(data);
  }
}

export interface ArregloLineasInvestigacionRelations {
  // describe navigational properties here
}

export type ArregloLineasInvestigacionWithRelations = ArregloLineasInvestigacion & ArregloLineasInvestigacionRelations;
