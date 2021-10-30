import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Jurado, JuradoRelations, LineaInvestigacion, JuradoLineaInvestigacion, SolicitudJuradoResultado, SolicitudJurado} from '../models';
import {JuradoLineaInvestigacionRepository} from './jurado-linea-investigacion.repository';
import {LineaInvestigacionRepository} from './linea-investigacion.repository';
import {SolicitudJuradoRepository} from './solicitud-jurado.repository';
import {SolicitudJuradoResultadoRepository} from './solicitud-jurado-resultado.repository';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype._id,
  JuradoRelations
> {

  public readonly lineaInvestigacions: HasManyThroughRepositoryFactory<LineaInvestigacion, typeof LineaInvestigacion.prototype._id,
          JuradoLineaInvestigacion,
          typeof Jurado.prototype._id
        >;

  public readonly tiene: HasManyThroughRepositoryFactory<SolicitudJuradoResultado, typeof SolicitudJuradoResultado.prototype._id,
          SolicitudJurado,
          typeof Jurado.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('JuradoLineaInvestigacionRepository') protected juradoLineaInvestigacionRepositoryGetter: Getter<JuradoLineaInvestigacionRepository>, @repository.getter('LineaInvestigacionRepository') protected lineaInvestigacionRepositoryGetter: Getter<LineaInvestigacionRepository>, @repository.getter('SolicitudJuradoRepository') protected solicitudJuradoRepositoryGetter: Getter<SolicitudJuradoRepository>, @repository.getter('SolicitudJuradoResultadoRepository') protected solicitudJuradoResultadoRepositoryGetter: Getter<SolicitudJuradoResultadoRepository>,
  ) {
    super(Jurado, dataSource);
    this.tiene = this.createHasManyThroughRepositoryFactoryFor('tiene', solicitudJuradoResultadoRepositoryGetter, solicitudJuradoRepositoryGetter,);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
    this.lineaInvestigacions = this.createHasManyThroughRepositoryFactoryFor('lineaInvestigacions', lineaInvestigacionRepositoryGetter, juradoLineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('lineaInvestigacions', this.lineaInvestigacions.inclusionResolver);
  }
}
