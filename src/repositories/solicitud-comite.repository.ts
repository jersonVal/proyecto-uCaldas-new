import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {SolicitudComite, SolicitudComiteRelations} from '../models';

export class SolicitudComiteRepository extends DefaultCrudRepository<
  SolicitudComite,
  typeof SolicitudComite.prototype._id,
  SolicitudComiteRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(SolicitudComite, dataSource);
  }
}
