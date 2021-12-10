import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudJurado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true
  })
  id_solicitudJuradoResultado: string;

  @property({
    type: 'string',
    required: true
  })
  id_jurado: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaInvitacion: string;

  @property({
    type: 'string',
  })
  fechaRespuesta?: string;

  @property({
    type: 'string',
  })
  observaciones?: string;

  @property({
    type: 'string',
  })
  id_estado?: string;

  constructor(data?: Partial<SolicitudJurado>) {
    super(data);
  }
}

export interface SolicitudJuradoRelations {
  // describe navigational properties here
}

export type SolicitudJuradoWithRelations = SolicitudJurado & SolicitudJuradoRelations;
