import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Solicitud,
  SolicitudJuradoResultado,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudSolicitudJuradoResultadoController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Solicitud has one SolicitudJuradoResultado',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudJuradoResultado),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudJuradoResultado>,
  ): Promise<SolicitudJuradoResultado> {
    return this.solicitudRepository.solicitudJuradoResultado(id).get(filter);
  }

  @post('/solicituds/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudJuradoResultado)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {
            title: 'NewSolicitudJuradoResultadoInSolicitud',
            exclude: ['_id'],
            optional: ['id_solicitud']
          }),
        },
      },
    }) solicitudJuradoResultado: Omit<SolicitudJuradoResultado, '_id'>,
  ): Promise<SolicitudJuradoResultado> {
    return this.solicitudRepository.solicitudJuradoResultado(id).create(solicitudJuradoResultado);
  }

  @patch('/solicituds/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Solicitud.SolicitudJuradoResultado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {partial: true}),
        },
      },
    })
    solicitudJuradoResultado: Partial<SolicitudJuradoResultado>,
    @param.query.object('where', getWhereSchemaFor(SolicitudJuradoResultado)) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.solicitudRepository.solicitudJuradoResultado(id).patch(solicitudJuradoResultado, where);
  }

  @del('/solicituds/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Solicitud.SolicitudJuradoResultado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudJuradoResultado)) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.solicitudRepository.solicitudJuradoResultado(id).delete(where);
  }
}
