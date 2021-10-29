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
  Solicitud,
} from '../models';
import {SolicitudJuradoResultadoRepository} from '../repositories';

export class SolicitudJuradoResultadoSolicitudController {
  constructor(
    @repository(SolicitudJuradoResultadoRepository)
    public solicitudJuradoResultadoRepository: SolicitudJuradoResultadoRepository,
  ) { }

  @get('/solicitud-jurado-resultados/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to SolicitudJuradoResultado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.string('id') id: typeof SolicitudJuradoResultado.prototype._id,
  ): Promise<Solicitud> {
    return this.solicitudJuradoResultadoRepository.solicitud(id);
  }
}
