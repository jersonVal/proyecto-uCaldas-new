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
import {SolicitudJurado} from '../models';
import {SolicitudJuradoRepository} from '../repositories';

export class SolicitudJuradoController {
  constructor(
    @repository(SolicitudJuradoRepository)
    public solicitudJuradoRepository : SolicitudJuradoRepository,
  ) {}

  @post('/solicitud-jurados')
  @response(200, {
    description: 'SolicitudJurado model instance',
    content: {'application/json': {schema: getModelSchemaRef(SolicitudJurado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJurado, {
            title: 'NewSolicitudJurado',
            exclude: ['_id'],
          }),
        },
      },
    })
    solicitudJurado: Omit<SolicitudJurado, '_id'>,
  ): Promise<SolicitudJurado> {
    return this.solicitudJuradoRepository.create(solicitudJurado);
  }

  @get('/solicitud-jurados/count')
  @response(200, {
    description: 'SolicitudJurado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SolicitudJurado) where?: Where<SolicitudJurado>,
  ): Promise<Count> {
    return this.solicitudJuradoRepository.count(where);
  }

  @get('/solicitud-jurados')
  @response(200, {
    description: 'Array of SolicitudJurado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SolicitudJurado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SolicitudJurado) filter?: Filter<SolicitudJurado>,
  ): Promise<SolicitudJurado[]> {
    return this.solicitudJuradoRepository.find(filter);
  }

  @patch('/solicitud-jurados')
  @response(200, {
    description: 'SolicitudJurado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJurado, {partial: true}),
        },
      },
    })
    solicitudJurado: SolicitudJurado,
    @param.where(SolicitudJurado) where?: Where<SolicitudJurado>,
  ): Promise<Count> {
    return this.solicitudJuradoRepository.updateAll(solicitudJurado, where);
  }

  @get('/solicitud-jurados/{id}')
  @response(200, {
    description: 'SolicitudJurado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SolicitudJurado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SolicitudJurado, {exclude: 'where'}) filter?: FilterExcludingWhere<SolicitudJurado>
  ): Promise<SolicitudJurado> {
    return this.solicitudJuradoRepository.findById(id, filter);
  }

  @patch('/solicitud-jurados/{id}')
  @response(204, {
    description: 'SolicitudJurado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudJurado, {partial: true}),
        },
      },
    })
    solicitudJurado: SolicitudJurado,
  ): Promise<void> {
    await this.solicitudJuradoRepository.updateById(id, solicitudJurado);
  }

  @put('/solicitud-jurados/{id}')
  @response(204, {
    description: 'SolicitudJurado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitudJurado: SolicitudJurado,
  ): Promise<void> {
    await this.solicitudJuradoRepository.replaceById(id, solicitudJurado);
  }

  @del('/solicitud-jurados/{id}')
  @response(204, {
    description: 'SolicitudJurado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitudJuradoRepository.deleteById(id);
  }
}
