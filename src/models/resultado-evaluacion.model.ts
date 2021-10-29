import {Entity, model, property, belongsTo} from '@loopback/repository';
import {SolicitudJuradoResultado} from './solicitud-jurado-resultado.model';

@model()
export class ResultadoEvaluacion extends Entity {
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
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'object',
    required: true,
  })
  formatoDiligenciado: object;

  @belongsTo(() => SolicitudJuradoResultado, {name: 'solicitudJurado'})
  id_solicitudJuradoresulatado: string;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
