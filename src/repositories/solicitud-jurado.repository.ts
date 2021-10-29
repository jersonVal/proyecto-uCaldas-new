import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {SolicitudJurado, SolicitudJuradoRelations} from '../models';

export class SolicitudJuradoRepository extends DefaultCrudRepository<
  SolicitudJurado,
  typeof SolicitudJurado.prototype._id,
  SolicitudJuradoRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(SolicitudJurado, dataSource);
  }
}
