import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {SolicitudJuradoResultado, SolicitudJuradoResultadoRelations, Estado, Solicitud, Jurado, SolicitudJurado} from '../models';
import {EstadoRepository} from './estado.repository';
import {SolicitudRepository} from './solicitud.repository';
import {SolicitudJuradoRepository} from './solicitud-jurado.repository';
import {JuradoRepository} from './jurado.repository';

export class SolicitudJuradoResultadoRepository extends DefaultCrudRepository<
  SolicitudJuradoResultado,
  typeof SolicitudJuradoResultado.prototype._id,
  SolicitudJuradoResultadoRelations
> {

  public readonly estado: BelongsToAccessor<Estado, typeof SolicitudJuradoResultado.prototype._id>;

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof SolicitudJuradoResultado.prototype._id>;

  public readonly jurados: HasManyThroughRepositoryFactory<Jurado, typeof Jurado.prototype._id,
          SolicitudJurado,
          typeof SolicitudJuradoResultado.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('SolicitudJuradoRepository') protected solicitudJuradoRepositoryGetter: Getter<SolicitudJuradoRepository>, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>,
  ) {
    super(SolicitudJuradoResultado, dataSource);
    this.jurados = this.createHasManyThroughRepositoryFactoryFor('jurados', juradoRepositoryGetter, solicitudJuradoRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
    this.estad = this.createBelongsToAccessorFor('estad', estadoRepositoryGetter,);
    this.registerInclusionResolver('estad', this.estad.inclusionResolver);
  }
}
