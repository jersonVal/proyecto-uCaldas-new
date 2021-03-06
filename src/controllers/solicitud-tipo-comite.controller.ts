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
  ArrayTipoComite,
Solicitud,
SolicitudComite,
TipoComite,
} from '../models';
import {SolicitudComiteRepository, SolicitudRepository} from '../repositories';

export class SolicitudTipoComiteController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
    @repository(SolicitudComiteRepository) protected solicitudComiteRepository: SolicitudComiteRepository,
  ) { }

  @get('/solicituds/{id}/tipo-comites', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many TipoComite through SolicitudComite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoComite)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<TipoComite>,
  ): Promise<TipoComite[]> {
    return this.solicitudRepository.tipoComites(id).find(filter);
  }


  @post('/asociar-array-tipo-comite-a-solcitud/', {
    responses: {
      '200': {
        description: 'create a LineaInvestigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArrayTipoComite)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArrayTipoComite, {}),
        },
      },
    }) datos: ArrayTipoComite,
  ): Promise<Boolean> {
    if (datos.array_tipoComite.length > 0) {
      datos.array_tipoComite.forEach(tipoComite => {
        this.solicitudComiteRepository.create({
          id_solicitud: datos.id_solicitud,
          id_tipoComite: tipoComite
        })
      })
      return true
    }
    return false
  }


  @post('/solicituds/{id}/tipo-comites', {
    responses: {
      '200': {
        description: 'create a TipoComite model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoComite)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoComite, {
            title: 'NewTipoComiteInSolicitud',
            exclude: ['_id'],
          }),
        },
      },
    }) tipoComite: Omit<TipoComite, '_id'>,
  ): Promise<TipoComite> {
    return this.solicitudRepository.tipoComites(id).create(tipoComite);
  }

  @patch('/solicituds/{id}/tipo-comites', {
    responses: {
      '200': {
        description: 'Solicitud.TipoComite PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoComite, {partial: true}),
        },
      },
    })
    tipoComite: Partial<TipoComite>,
    @param.query.object('where', getWhereSchemaFor(TipoComite)) where?: Where<TipoComite>,
  ): Promise<Count> {
    return this.solicitudRepository.tipoComites(id).patch(tipoComite, where);
  }

  @del('/solicituds/{id}/tipo-comites', {
    responses: {
      '200': {
        description: 'Solicitud.TipoComite DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(TipoComite)) where?: Where<TipoComite>,
  ): Promise<Count> {
    return this.solicitudRepository.tipoComites(id).delete(where);
  }
}
