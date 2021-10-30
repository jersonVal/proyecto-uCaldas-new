import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Estado, EstadoRelations, SolicitudJuradoResultado} from '../models';
import {SolicitudJuradoResultadoRepository} from './solicitud-jurado-resultado.repository';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype._id,
  EstadoRelations
> {

  public readonly solicitudJuradoResultado: HasOneRepositoryFactory<SolicitudJuradoResultado, typeof Estado.prototype._id>;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('SolicitudJuradoResultadoRepository') protected solicitudJuradoResultadoRepositoryGetter: Getter<SolicitudJuradoResultadoRepository>,
  ) {
    super(Estado, dataSource);
    this.solicitudJuradoResultado = this.createHasOneRepositoryFactoryFor('solicitudJuradoResultado', solicitudJuradoResultadoRepositoryGetter);
    this.registerInclusionResolver('solicitudJuradoResultado', this.solicitudJuradoResultado.inclusionResolver);
  }
}
