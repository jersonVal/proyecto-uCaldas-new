import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';
import {SolicitudComite} from './solicitud-comite.model';

@model()
export class TipoComite extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Solicitud, {through: {model: () => SolicitudComite, keyFrom: 'id_tipoComite', keyTo: 'id_solicitud'}})
  solicituds: Solicitud[];

  constructor(data?: Partial<TipoComite>) {
    super(data);
  }
}

export interface TipoComiteRelations {
  // describe navigational properties here
}

export type TipoComiteWithRelations = TipoComite & TipoComiteRelations;
