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
import {ProponenteSolicitud} from '../models';
import {ProponenteSolicitudRepository} from '../repositories';

export class ProponenteSolicitudController {
  constructor(
    @repository(ProponenteSolicitudRepository)
    public proponenteSolicitudRepository : ProponenteSolicitudRepository,
  ) {}

  @post('/proponente-solicituds')
  @response(200, {
    description: 'ProponenteSolicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProponenteSolicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteSolicitud, {
            title: 'NewProponenteSolicitud',
            exclude: ['_id'],
          }),
        },
      },
    })
    proponenteSolicitud: Omit<ProponenteSolicitud, '_id'>,
  ): Promise<ProponenteSolicitud> {
    return this.proponenteSolicitudRepository.create(proponenteSolicitud);
  }

  @get('/proponente-solicituds/count')
  @response(200, {
    description: 'ProponenteSolicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProponenteSolicitud) where?: Where<ProponenteSolicitud>,
  ): Promise<Count> {
    return this.proponenteSolicitudRepository.count(where);
  }

  @get('/proponente-solicituds')
  @response(200, {
    description: 'Array of ProponenteSolicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProponenteSolicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProponenteSolicitud) filter?: Filter<ProponenteSolicitud>,
  ): Promise<ProponenteSolicitud[]> {
    return this.proponenteSolicitudRepository.find(filter);
  }

  @patch('/proponente-solicituds')
  @response(200, {
    description: 'ProponenteSolicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteSolicitud, {partial: true}),
        },
      },
    })
    proponenteSolicitud: ProponenteSolicitud,
    @param.where(ProponenteSolicitud) where?: Where<ProponenteSolicitud>,
  ): Promise<Count> {
    return this.proponenteSolicitudRepository.updateAll(proponenteSolicitud, where);
  }

  @get('/proponente-solicituds/{id}')
  @response(200, {
    description: 'ProponenteSolicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProponenteSolicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProponenteSolicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<ProponenteSolicitud>
  ): Promise<ProponenteSolicitud> {
    return this.proponenteSolicitudRepository.findById(id, filter);
  }

  @patch('/proponente-solicituds/{id}')
  @response(204, {
    description: 'ProponenteSolicitud PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteSolicitud, {partial: true}),
        },
      },
    })
    proponenteSolicitud: ProponenteSolicitud,
  ): Promise<void> {
    await this.proponenteSolicitudRepository.updateById(id, proponenteSolicitud);
  }

  @put('/proponente-solicituds/{id}')
  @response(204, {
    description: 'ProponenteSolicitud PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() proponenteSolicitud: ProponenteSolicitud,
  ): Promise<void> {
    await this.proponenteSolicitudRepository.replaceById(id, proponenteSolicitud);
  }

  @del('/proponente-solicituds/{id}')
  @response(204, {
    description: 'ProponenteSolicitud DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.proponenteSolicitudRepository.deleteById(id);
  }
}
