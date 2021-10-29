import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Facultad, FacultadRelations} from '../models';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype._id,
  FacultadRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Facultad, dataSource);
  }
}
