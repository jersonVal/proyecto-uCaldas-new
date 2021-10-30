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
Jurado,
SolicitudJurado,
SolicitudJuradoResultado,
} from '../models';
import {JuradoRepository} from '../repositories';

export class JuradoSolicitudJuradoResultadoController {
  constructor(
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
  ) { }

  @get('/jurados/{id}/solicitud-jurado-resultados', {
    responses: {
      '200': {
        description: 'Array of Jurado has many SolicitudJuradoResultado through SolicitudJurado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SolicitudJuradoResultado)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudJuradoResultado>,
  ): Promise<SolicitudJuradoResultado[]> {
    return this.juradoRepository.tiene(id).find(filter);
  }

  @post('/jurados/{id}/solicitud-jurado-resultados', {
    responses: {
      '200': {
        description: 'create a SolicitudJuradoResultado model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudJuradoResultado)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Jurado.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {
            title: 'NewSolicitudJuradoResultadoInJurado',
            exclude: ['_id'],
          }),
        },
      },
    }) solicitudJuradoResultado: Omit<SolicitudJuradoResultado, '_id'>,
  ): Promise<SolicitudJuradoResultado> {
    return this.juradoRepository.tiene(id).create(solicitudJuradoResultado);
  }

  @patch('/jurados/{id}/solicitud-jurado-resultados', {
    responses: {
      '200': {
        description: 'Jurado.SolicitudJuradoResultado PATCH success count',
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
    return this.juradoRepository.tiene(id).patch(solicitudJuradoResultado, where);
  }

  @del('/jurados/{id}/solicitud-jurado-resultados', {
    responses: {
      '200': {
        description: 'Jurado.SolicitudJuradoResultado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudJuradoResultado)) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.juradoRepository.tiene(id).delete(where);
  }
}
