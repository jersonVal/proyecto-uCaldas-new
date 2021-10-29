import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {LineaInvestigacion, LineaInvestigacionRelations, Jurado, JuradoLineaInvestigacion} from '../models';
import {JuradoLineaInvestigacionRepository} from './jurado-linea-investigacion.repository';
import {JuradoRepository} from './jurado.repository';

export class LineaInvestigacionRepository extends DefaultCrudRepository<
  LineaInvestigacion,
  typeof LineaInvestigacion.prototype._id,
  LineaInvestigacionRelations
> {

  public readonly jurados: HasManyThroughRepositoryFactory<Jurado, typeof Jurado.prototype._id,
          JuradoLineaInvestigacion,
          typeof LineaInvestigacion.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('JuradoLineaInvestigacionRepository') protected juradoLineaInvestigacionRepositoryGetter: Getter<JuradoLineaInvestigacionRepository>, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>,
  ) {
    super(LineaInvestigacion, dataSource);
    this.jurados = this.createHasManyThroughRepositoryFactoryFor('jurados', juradoRepositoryGetter, juradoLineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
  }
}
