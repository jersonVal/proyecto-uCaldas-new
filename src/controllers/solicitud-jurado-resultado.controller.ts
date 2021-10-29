import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SolicitudJuradoResultado} from '../models';
import {SolicitudJuradoResultadoRepository} from '../repositories';

export class SolicitudJuradoResultadoController {
  constructor(
    @repository(SolicitudJuradoResultadoRepository)
    public solicitudJuradoResultadoRepository : SolicitudJuradoResultadoRepository,
  ) {}

  @post('/solicitud-jurado-resultados')
  @response(200, {
    description: 'SolicitudJuradoResultado model instance',
    content: {'application/json': {schema: getModelSchemaRef(SolicitudJuradoResultado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {
            title: 'NewSolicitudJuradoResultado',
            exclude: ['_id'],
          }),
        },
      },
    })
    solicitudJuradoResultado: Omit<SolicitudJuradoResultado, '_id'>,
  ): Promise<SolicitudJuradoResultado> {
    return this.solicitudJuradoResultadoRepository.create(solicitudJuradoResultado);
  }

  @get('/solicitud-jurado-resultados/count')
  @response(200, {
    description: 'SolicitudJuradoResultado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SolicitudJuradoResultado) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.solicitudJuradoResultadoRepository.count(where);
  }

  @get('/solicitud-jurado-resultados')
  @response(200, {
    description: 'Array of SolicitudJuradoResultado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SolicitudJuradoResultado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SolicitudJuradoResultado) filter?: Filter<SolicitudJuradoResultado>,
  ): Promise<SolicitudJuradoResultado[]> {
    return this.solicitudJuradoResultadoRepository.find(filter);
  }

  @patch('/solicitud-jurado-resultados')
  @response(200, {
    description: 'SolicitudJuradoResultado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {partial: true}),
        },
      },
    })
    solicitudJuradoResultado: SolicitudJuradoResultado,
    @param.where(SolicitudJuradoResultado) where?: Where<SolicitudJuradoResultado>,
  ): Promise<Count> {
    return this.solicitudJuradoResultadoRepository.updateAll(solicitudJuradoResultado, where);
  }

  @get('/solicitud-jurado-resultados/{id}')
  @response(200, {
    description: 'SolicitudJuradoResultado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SolicitudJuradoResultado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SolicitudJuradoResultado, {exclude: 'where'}) filter?: FilterExcludingWhere<SolicitudJuradoResultado>
  ): Promise<SolicitudJuradoResultado> {
    return this.solicitudJuradoResultadoRepository.findById(id, filter);
  }

  @patch('/solicitud-jurado-resultados/{id}')
  @response(204, {
    description: 'SolicitudJuradoResultado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJuradoResultado, {partial: true}),
        },
      },
    })
    solicitudJuradoResultado: SolicitudJuradoResultado,
  ): Promise<void> {
    await this.solicitudJuradoResultadoRepository.updateById(id, solicitudJuradoResultado);
  }

  @put('/solicitud-jurado-resultados/{id}')
  @response(204, {
    description: 'SolicitudJuradoResultado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitudJuradoResultado: SolicitudJuradoResultado,
  ): Promise<void> {
    await this.solicitudJuradoResultadoRepository.replaceById(id, solicitudJuradoResultado);
  }

  @del('/solicitud-jurado-resultados/{id}')
  @response(204, {
    description: 'SolicitudJuradoResultado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitudJuradoResultadoRepository.deleteById(id);
  }
}
