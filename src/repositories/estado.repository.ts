import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Estado, EstadoRelations} from '../models';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype._id,
  EstadoRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Estado, dataSource);
  }
}
