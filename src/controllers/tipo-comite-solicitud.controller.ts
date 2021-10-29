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
TipoComite,
SolicitudComite,
Solicitud,
} from '../models';
import {TipoComiteRepository} from '../repositories';

export class TipoComiteSolicitudController {
  constructor(
    @repository(TipoComiteRepository) protected tipoComiteRepository: TipoComiteRepository,
  ) { }

  @get('/tipo-comites/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of TipoComite has many Solicitud through SolicitudComite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.tipoComiteRepository.solicituds(id).find(filter);
  }

  @post('/tipo-comites/{id}/solicituds', {
    responses: {
      '200': {
        description: 'create a Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof TipoComite.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInTipoComite',
            exclude: ['_id'],
          }),
        },
      },
    }) solicitud: Omit<Solicitud, '_id'>,
  ): Promise<Solicitud> {
    return this.tipoComiteRepository.solicituds(id).create(solicitud);
  }

  @patch('/tipo-comites/{id}/solicituds', {
    responses: {
      '200': {
        description: 'TipoComite.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.tipoComiteRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/tipo-comites/{id}/solicituds', {
    responses: {
      '200': {
        description: 'TipoComite.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.tipoComiteRepository.solicituds(id).delete(where);
  }
}
