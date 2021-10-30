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
  Estado,
  SolicitudJuradoResultado,
} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadoSolicitudJuradoResultadoController {
  constructor(
    @repository(EstadoRepository) protected estadoRepository: EstadoRepository,
  ) { }

  @get('/estados/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Estado has one SolicitudJuradoResultado',
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
    return this.estadoRepository.solicitudJuradoResultado(id).get(filter);
  }

  @post('/estados/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudJuradoResultado)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Estado.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {
            title: 'NewSolicitudJuradoResultadoInEstado',
            exclude: ['_id'],
            optional: ['id_estado']
          }),
        },
      },
    }) solicitudJuradoResultado: Omit<SolicitudJuradoResultado, '_id'>,
  ): Promise<SolicitudJuradoResultado> {
    return this.estadoRepository.solicitudJuradoResultado(id).create(solicitudJuradoResultado);
  }

  @patch('/estados/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Estado.SolicitudJuradoResultado PATCH success count',
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
    return this.estadoRepository.solicitudJuradoResultado(id).patch(solicitudJuradoResultado, where);
  }

  @del('/estados/{id}/solicitud-jurado-resultado', {
    responses: {
      '200': {
        description: 'Estado.SolicitudJuradoResultado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudJuradoResultado)) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.estadoRepository.solicitudJuradoResultado(id).delete(where);
  }
}
