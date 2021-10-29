import {Entity, model, property} from '@loopback/repository';

@model()
export class ProponenteSolicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  id_proponente?: string;

  @property({
    type: 'string',
  })
  id_solicitud?: string;

  constructor(data?: Partial<ProponenteSolicitud>) {
    super(data);
  }
}

export interface ProponenteSolicitudRelations {
  // describe navigational properties here
}

export type ProponenteSolicitudWithRelations = ProponenteSolicitud & ProponenteSolicitudRelations;
