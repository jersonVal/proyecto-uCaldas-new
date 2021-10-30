import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {SolicitudJuradoResultado, SolicitudJuradoResultadoRelations,  Jurado, SolicitudJurado} from '../models';
import {SolicitudJuradoRepository} from './solicitud-jurado.repository';
import {JuradoRepository} from './jurado.repository';

export class SolicitudJuradoResultadoRepository extends DefaultCrudRepository<
  SolicitudJuradoResultado,
  typeof SolicitudJuradoResultado.prototype._id,
  SolicitudJuradoResultadoRelations
> {

<<<<<<< HEAD
  public readonly estado: BelongsToAccessor<Estado, typeof SolicitudJuradoResultado.prototype._id>;

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof SolicitudJuradoResultado.prototype._id>;
=======
>>>>>>> 228d527c1edcd13c48ce72125d9e2696bfcc52bf

  public readonly jurados: HasManyThroughRepositoryFactory<Jurado, typeof Jurado.prototype._id,
          SolicitudJurado,
          typeof SolicitudJuradoResultado.prototype._id
        >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource, @repository.getter('SolicitudJuradoRepository') protected solicitudJuradoRepositoryGetter: Getter<SolicitudJuradoRepository>, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>,
  ) {
    super(SolicitudJuradoResultado, dataSource);
    this.jurados = this.createHasManyThroughRepositoryFactoryFor('jurados', juradoRepositoryGetter, solicitudJuradoRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
   
  }
}