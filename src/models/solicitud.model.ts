import {Entity, model, property, belongsTo, hasOne, hasMany} from '@loopback/repository';
import {Estado} from './estado.model';
import {TipoSolicitud} from './tipo-solicitud.model';
import {Modalidad} from './modalidad.model';
import {LineaInvestigacion} from './linea-investigacion.model';
import {SolicitudJuradoResultado} from './solicitud-jurado-resultado.model';
import {TipoComite} from './tipo-comite.model';
import {SolicitudComite} from './solicitud-comite.model';
import {Proponente} from './proponente.model';
import {ProponenteSolicitud} from './proponente-solicitud.model';

@model()
export class Solicitud extends Entity {
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
  fecha: string;

  @property({
    type: 'object',
    required: true,
  })
  archivo: object;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreTrabajo: string;

  @belongsTo(() => Estado, {name: 'estado'})
  id_estado: string;

  @belongsTo(() => TipoSolicitud, {name: 'tipoSolicitud'})
  id_tipoSolicitud: string;

  @belongsTo(() => Modalidad, {name: 'modalidad'})
  id_modalidad: string;

  @belongsTo(() => LineaInvestigacion, {name: 'linea'})
  id_lineaInvestigacion: string;

  @hasOne(() => SolicitudJuradoResultado, {keyTo: 'id_solicitud'})
  solicitudJuradoResultado: SolicitudJuradoResultado;

  @hasMany(() => TipoComite, {through: {model: () => SolicitudComite, keyFrom: 'id_solicitud', keyTo: 'id_tipoComite'}})
  tipoComites: TipoComite[];

  @hasMany(() => Proponente, {through: {model: () => ProponenteSolicitud, keyFrom: 'id_solicitud', keyTo: 'id_proponente'}})
  proponentes: Proponente[];

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
