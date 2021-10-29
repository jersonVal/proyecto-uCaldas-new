import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {ResultadoEvaluacion, ResultadoEvaluacionRelations, SolicitudJuradoResultado} from '../models';
import {SolicitudJuradoResultadoRepository} from './solicitud-jurado-resultado.repository';

export class ResultadoEvaluacionRepository extends DefaultCrudRepository<
  ResultadoEvaluacion,
  typeof ResultadoEvaluacion.prototype._id,
  ResultadoEvaluacionRelations
> {

  public readonly solicitudJurado: BelongsToAccessor<SolicitudJuradoResultado, typeof ResultadoEvaluacion.prototype._id>;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('SolicitudJuradoResultadoRepository') protected solicitudJuradoResultadoRepositoryGetter: Getter<SolicitudJuradoResultadoRepository>,
  ) {
    super(ResultadoEvaluacion, dataSource);
    this.solicitudJurado = this.createBelongsToAccessorFor('solicitudJurado', solicitudJuradoResultadoRepositoryGetter,);
    this.registerInclusionResolver('solicitudJurado', this.solicitudJurado.inclusionResolver);
  }
}
