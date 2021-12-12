import {
  Filter, repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, post, requestBody,
  response
} from '@loopback/rest';
import {ArregloLineasInvestigacion, Jurado, JuradoLineaInvestigacion, LineaInvestigacion} from '../models';
import {JuradoLineaInvestigacionRepository, JuradoRepository, LineaInvestigacionRepository} from '../repositories';

export class JuradoLineaInvestigacionController {

  constructor(
    @repository(JuradoLineaInvestigacionRepository)
    public juradoLineaInvestigacionRepository : JuradoLineaInvestigacionRepository,
    @repository(JuradoRepository)
    public juradoRepository : JuradoRepository,
    @repository(LineaInvestigacionRepository)
    public lineaInvestigacionRepository : LineaInvestigacionRepository
  ) {}

  @get('/jurados/{id}/linea-investigacions', {
    responses: {
      '200': {
        description: 'Array of Jurado has many LineaInvestigacion through JuradoLineaInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(LineaInvestigacion)},
          },
        },
      },
    },
  })
  async find2(
    @param.path.string('id') _id: string,
    @param.query.object('filter') filter?: Filter<LineaInvestigacion>,
  ): Promise<LineaInvestigacion[]> {
    const busqueda = await this.juradoRepository.lineaInvestigacions(_id).find(filter);
    return busqueda
  }

  @get('/lineas-investigacion-jurado')
  @response(200, {
    description: 'Array of lineas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(JuradoLineaInvestigacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(JuradoLineaInvestigacion) filter?: Filter<JuradoLineaInvestigacion>,
  ): Promise<JuradoLineaInvestigacion[]> {
    return this.juradoLineaInvestigacionRepository.find(filter);
  }

  @post('/asociar-jurado-lineas-investigacion/', {
    responses: {
      '200': {
        description: 'create a LineaInvestigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArregloLineasInvestigacion)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArregloLineasInvestigacion, {}),
        },
      },
    }) datos: ArregloLineasInvestigacion,
    @param.path.string('id') id_jurado: typeof Jurado.prototype._id,
  ): Promise<Boolean> {
    if (datos.lineas_investigacion.length > 0) {
      datos.lineas_investigacion.forEach(idLinea => {
        this.juradoLineaInvestigacionRepository.create({
          id_jurado: id_jurado,
          id_lineaInvestigacion: idLinea
        })
      })
      return true
    }
    return false
  }

  @post('/jurados-linea-investigacion', {
    responses: {
      '200': {
        description: 'create a LineaInvestigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(JuradoLineaInvestigacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JuradoLineaInvestigacion, {
            title: 'NewLineaInvestigacionInJurado',
            exclude: ['_id'],
          }),
        },
      },
    }) datos: Omit<JuradoLineaInvestigacion, '_id'>,
  ): Promise<JuradoLineaInvestigacion | null> {
    let registro = await this.juradoLineaInvestigacionRepository.create(datos);
    return registro;
  }

}
