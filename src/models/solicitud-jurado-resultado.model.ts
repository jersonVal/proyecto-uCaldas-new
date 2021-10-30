import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Estado} from './estado.model';
import {Solicitud} from './solicitud.model';
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
  observacion: string;

  @belongsTo(() => Estado, {name: 'estado'})
  id_estado: string;

  @belongsTo(() => Solicitud, {name: 'solicitud'})
  id_solicitud: string;

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
