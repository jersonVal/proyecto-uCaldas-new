import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Estado, TipoSolicitud, Modalidad, LineaInvestigacion, SolicitudJuradoResultado} from '../models';
import {EstadoRepository} from './estado.repository';
import {TipoSolicitudRepository} from './tipo-solicitud.repository';
import {ModalidadRepository} from './modalidad.repository';
import {LineaInvestigacionRepository} from './linea-investigacion.repository';
import {SolicitudJuradoResultadoRepository} from './solicitud-jurado-resultado.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype._id,
  SolicitudRelations
> {

  public readonly estado: BelongsToAccessor<Estado, typeof Solicitud.prototype._id>;

  public readonly tipoSolicitud: BelongsToAccessor<TipoSolicitud, typeof Solicitud.prototype._id>;

  public readonly modalidad: BelongsToAccessor<Modalidad, typeof Solicitud.prototype._id>;

  public readonly linea: BelongsToAccessor<LineaInvestigacion, typeof Solicitud.prototype._id>;

  public readonly solicitudJuradoResultado: HasOneRepositoryFactory<SolicitudJuradoResultado, typeof Solicitud.prototype._id>;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>, @repository.getter('TipoSolicitudRepository') protected tipoSolicitudRepositoryGetter: Getter<TipoSolicitudRepository>, @repository.getter('ModalidadRepository') protected modalidadRepositoryGetter: Getter<ModalidadRepository>, @repository.getter('LineaInvestigacionRepository') protected lineaInvestigacionRepositoryGetter: Getter<LineaInvestigacionRepository>, @repository.getter('SolicitudJuradoResultadoRepository') protected solicitudJuradoResultadoRepositoryGetter: Getter<SolicitudJuradoResultadoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.solicitudJuradoResultado = this.createHasOneRepositoryFactoryFor('solicitudJuradoResultado', solicitudJuradoResultadoRepositoryGetter);
    this.registerInclusionResolver('solicitudJuradoResultado', this.solicitudJuradoResultado.inclusionResolver);
    this.linea = this.createBelongsToAccessorFor('linea', lineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('linea', this.linea.inclusionResolver);
    this.modalidad = this.createBelongsToAccessorFor('modalidad', modalidadRepositoryGetter,);
    this.registerInclusionResolver('modalidad', this.modalidad.inclusionResolver);
    this.tipoSolicitud = this.createBelongsToAccessorFor('tipoSolicitud', tipoSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tipoSolicitud', this.tipoSolicitud.inclusionResolver);
    this.estado = this.createBelongsToAccessorFor('estado', estadoRepositoryGetter,);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
  }
}
