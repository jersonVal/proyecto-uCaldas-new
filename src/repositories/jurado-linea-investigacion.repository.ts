import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {JuradoLineaInvestigacion, JuradoLineaInvestigacionRelations} from '../models';

export class JuradoLineaInvestigacionRepository extends DefaultCrudRepository<
  JuradoLineaInvestigacion,
  typeof JuradoLineaInvestigacion.prototype._id,
  JuradoLineaInvestigacionRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(JuradoLineaInvestigacion, dataSource);
  }
}
