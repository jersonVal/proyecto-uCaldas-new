import {Entity, model, property, hasOne} from '@loopback/repository';
import {SolicitudJuradoResultado} from './solicitud-jurado-resultado.model';

@model()
export class Estado extends Entity {
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
  tipo: string;

  @hasOne(() => SolicitudJuradoResultado, {keyTo: 'id_estado'})
  solicitudJuradoResultado: SolicitudJuradoResultado;

  constructor(data?: Partial<Estado>) {
    super(data);
  }
}

export interface EstadoRelations {
  // describe navigational properties here
}

export type EstadoWithRelations = Estado & EstadoRelations;
