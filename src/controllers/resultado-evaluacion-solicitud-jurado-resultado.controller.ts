import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ResultadoEvaluacion,
  SolicitudJuradoResultado,
} from '../models';
import {ResultadoEvaluacionRepository} from '../repositories';

export class ResultadoEvaluacionSolicitudJuradoResultadoController {
  constructor(
    @repository(ResultadoEvaluacionRepository)
    public resultadoEvaluacionRepository: ResultadoEvaluacionRepository,
  ) { }

  @get('/resultado-evaluacions/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'SolicitudJuradoResultado belonging to ResultadoEvaluacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SolicitudJuradoResultado)},
          },
        },
      },
    },
  })
  async getSolicitudJuradoResultado(
    @param.path.string('id') id: typeof ResultadoEvaluacion.prototype._id,
  ): Promise<SolicitudJuradoResultado> {
    return this.resultadoEvaluacionRepository.solicitudJurado(id);
  }
}
