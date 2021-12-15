import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
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
  SolicitudJuradoResultado,
  SolicitudJurado,
  Jurado,
  ArregloJuradosSolicitud,
  NotificacionCorreo,
} from '../models';
import { Keys } from '../config/Keys';
import { JuradoRepository, SolicitudJuradoRepository, SolicitudJuradoResultadoRepository } from '../repositories';
import { NotificacionesService } from '../services';

// @authenticate('admin')
export class SolicitudJuradoResultadoJuradoController {
  constructor(
    @repository(SolicitudJuradoResultadoRepository) protected solicitudJuradoResultadoRepository: SolicitudJuradoResultadoRepository,
    @repository(SolicitudJuradoRepository) protected solicitudJuradoRepository: SolicitudJuradoRepository,
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
    @service(NotificacionesService) public servicioNotificaciones: NotificacionesService
  ) { }


  //PERMIOS DE ADMINISTRADOR 
  @get('/solicitud-jurado-resultados/{id}/jurados', {
    responses: {
      '200': {
        description: 'Array of SolicitudJuradoResultado has many Jurado through SolicitudJurado',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Jurado) },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Jurado>,
  ): Promise<Jurado[]> {
    return this.solicitudJuradoResultadoRepository.jurados(id).find(filter);
  }

  @post('/solicitud-jurado-resultados/{id}/jurados', {
    responses: {
      '200': {
        description: 'create a Jurado model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Jurado) } },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof SolicitudJuradoResultado.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jurado, {
            title: 'NewJuradoInSolicitudJuradoResultado',
            exclude: ['_id'],
          }),
        },
      },
    }) jurado: Omit<Jurado, '_id'>,
  ): Promise<Jurado> {
    return this.solicitudJuradoResultadoRepository.jurados(id).create(jurado);
  }

  @patch('/solicitud-jurado-resultados/{id}/jurados', {
    responses: {
      '200': {
        description: 'SolicitudJuradoResultado.Jurado PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jurado, { partial: true }),
        },
      },
    })
    jurado: Partial<Jurado>,
    @param.query.object('where', getWhereSchemaFor(Jurado)) where?: Where<Jurado>,
  ): Promise<Count> {
    return this.solicitudJuradoResultadoRepository.jurados(id).patch(jurado, where);
  }

  @del('/solicitud-jurado-resultados/{id}/jurados', {
    responses: {
      '200': {
        description: 'SolicitudJuradoResultado.Jurado DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Jurado)) where?: Where<Jurado>,
  ): Promise<Count> {
    return this.solicitudJuradoResultadoRepository.jurados(id).delete(where);
  }


  @post('/asociar-jurado-con-solicitud-resultado/', {
    responses: {
      '200': {
        description: 'create a LineaInvestigacion model instance',
        content: { 'application/json': { schema: getModelSchemaRef(ArregloJuradosSolicitud) } },
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArregloJuradosSolicitud, {}),
        },
      },
    }) datos: ArregloJuradosSolicitud,
  ): Promise<Boolean> {
    if (datos.arreglo_jurados.length > 0) {
      datos.arreglo_jurados.forEach(async idJurado => {
        this.solicitudJuradoRepository.create({
          id_jurado: idJurado,
          id_solicitudJuradoResultado: datos.id_solicitudResultado,
          fechaInvitacion: datos.fechaInvitacion,
          fechaRespuesta: datos.fechaRespuesta,
          observaciones: datos.observaciones,
          id_estado: datos.id_estado
        })
        //enviar correo al jurado
        let jurado = await this.juradoRepository.findOne({
          where: {
            _id: idJurado,
          }
        })
        if (jurado) {
          let mensaje = new NotificacionCorreo();
          mensaje.destino = jurado.correo;
          mensaje.asunto = Keys.asuntoSolicitud;
          mensaje.mensaje = `
          Hola ${jurado.nombre}
          
          usted a sido elegido para ser jurado de la solicitud:

          ${datos.id_solicitudResultado}

          dar click en boton de abajo para confirmar o cancelar la invitacion

          <div style="display: flex; justify-content: space-around; align-items: center">
          <a href="google.com" target=""_blank style="background-color: blue; cursor: pointer; color: white; border: none; padding: .5rem 2rem; border-radius: 8px;">Aceptar</a>
          <a href="google.com" target=""_blank style="background-color: red; cursor: pointer; color: white; border: none; padding: .5rem 2rem; border-radius: 8px;">Cancelar</a>
          </div>

          `
          this.servicioNotificaciones.EnviarCorreo(mensaje);
        }
      })
      return true
    }
    return false
  }
}
