import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {TipoComite, TipoComiteRelations, Solicitud, SolicitudComite} from '../models';
import {SolicitudComiteRepository} from './solicitud-comite.repository';
import {SolicitudRepository} from './solicitud.repository';

export class TipoComiteRepository extends DefaultCrudRepository<
  TipoComite,
  typeof TipoComite.prototype._id,
  TipoComiteRelations
> {

  public readonly solicituds: HasManyThroughRepositoryFactory<Solicitud, typeof Solicitud.prototype._id,
          SolicitudComite,
          typeof TipoComite.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('SolicitudComiteRepository') protected solicitudComiteRepositoryGetter: Getter<SolicitudComiteRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(TipoComite, dataSource);
    this.solicituds = this.createHasManyThroughRepositoryFactoryFor('solicituds', solicitudRepositoryGetter, solicitudComiteRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
