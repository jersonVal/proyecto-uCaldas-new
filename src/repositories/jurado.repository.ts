import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Jurado, JuradoRelations} from '../models';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype._id,
  JuradoRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Jurado, dataSource);
  }
}
