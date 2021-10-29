import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SolicitudJuradoResultado,
  Estado,
} from '../models';
import {SolicitudJuradoResultadoRepository} from '../repositories';

export class SolicitudJuradoResultadoEstadoController {
  constructor(
    @repository(SolicitudJuradoResultadoRepository)
    public solicitudJuradoResultadoRepository: SolicitudJuradoResultadoRepository,
  ) { }

  @get('/solicitud-jurado-resultados/{id}/estado', {
    responses: {
      '200': {
        description: 'Estado belonging to SolicitudJuradoResultado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estado)},
          },
        },
      },
    },
  })
  async getEstado(
    @param.path.string('id') id: typeof SolicitudJuradoResultado.prototype._id,
  ): Promise<Estado> {
    return this.solicitudJuradoResultadoRepository.estad(id);
  }
}
