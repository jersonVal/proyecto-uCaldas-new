import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Departamento} from './departamento.model';
import {TipoVinculacion} from './tipo-vinculacion.model';
import {Solicitud} from './solicitud.model';
import {ProponenteSolicitud} from './proponente-solicitud.model';

@model()
export class Proponente extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    default: ""
  })
  foto?: string;
  

  @belongsTo(() => Departamento, {name: 'pertenece'})
  id_departamento: string;

  @belongsTo(() => TipoVinculacion, {name: 'tiene'})
  id_tipoVinculacion: string;

  @hasMany(() => Solicitud, {through: {model: () => ProponenteSolicitud, keyFrom: 'id_proponente', keyTo: 'id_solicitud'}})
  solicituds: Solicitud[];

  constructor(data?: Partial<Proponente>) {
    super(data);
  }
}

export interface ProponenteRelations {
  // describe navigational properties here
}

export type ProponenteWithRelations = Proponente & ProponenteRelations;
