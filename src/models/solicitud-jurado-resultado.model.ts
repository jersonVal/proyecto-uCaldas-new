import {Entity, model, property, hasMany} from '@loopback/repository';
import {Jurado} from './jurado.model';
import {SolicitudJurado} from './solicitud-jurado.model';

@model()
export class SolicitudJuradoResultado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInvitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaRespuesta: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @property({
    type: 'string',
  })
  id_estado?: string;

  @property({
    type: 'string',
  })
  id_solicitud?: string;

  @hasMany(() => Jurado, {through: {model: () => SolicitudJurado, keyFrom: 'id_solicitudJuradoResultado', keyTo: 'id_jurado'}})
  jurados: Jurado[];

  constructor(data?: Partial<SolicitudJuradoResultado>) {
    super(data);
  }
}

export interface SolicitudJuradoResultadoRelations {
  // describe navigational properties here
}

export type SolicitudJuradoResultadoWithRelations = SolicitudJuradoResultado & SolicitudJuradoResultadoRelations;
