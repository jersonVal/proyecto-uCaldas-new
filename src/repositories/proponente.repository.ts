import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Proponente, ProponenteRelations, Departamento, TipoVinculacion, Solicitud, ProponenteSolicitud} from '../models';
import {DepartamentoRepository} from './departamento.repository';
import {TipoVinculacionRepository} from './tipo-vinculacion.repository';
import {ProponenteSolicitudRepository} from './proponente-solicitud.repository';
import {SolicitudRepository} from './solicitud.repository';

export class ProponenteRepository extends DefaultCrudRepository<
  Proponente,
  typeof Proponente.prototype._id,
  ProponenteRelations
> {

  public readonly pertenece: BelongsToAccessor<Departamento, typeof Proponente.prototype._id>;

  public readonly tiene: BelongsToAccessor<TipoVinculacion, typeof Proponente.prototype._id>;

  public readonly solicituds: HasManyThroughRepositoryFactory<Solicitud, typeof Solicitud.prototype._id,
          ProponenteSolicitud,
          typeof Proponente.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>, @repository.getter('TipoVinculacionRepository') protected tipoVinculacionRepositoryGetter: Getter<TipoVinculacionRepository>, @repository.getter('ProponenteSolicitudRepository') protected proponenteSolicitudRepositoryGetter: Getter<ProponenteSolicitudRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Proponente, dataSource);
    this.solicituds = this.createHasManyThroughRepositoryFactoryFor('solicituds', solicitudRepositoryGetter, proponenteSolicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.tiene = this.createBelongsToAccessorFor('tiene', tipoVinculacionRepositoryGetter,);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
    this.pertenece = this.createBelongsToAccessorFor('pertenece', departamentoRepositoryGetter,);
    this.registerInclusionResolver('pertenece', this.pertenece.inclusionResolver);
  }
}
