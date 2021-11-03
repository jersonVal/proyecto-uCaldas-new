import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const fetch = require('node-fetch');
import { NotificacionCorreo } from '../models/notificacion-correo.model';
import { Keys } from '../config/Keys';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  EnviarCorreo(datos: NotificacionCorreo){
    //instalamos node fetch para typescript e @types/node-fetch
    let url = `${Keys.urlCorreo}?destino=${datos.destino}&asunto=${datos.asunto}&mensaje=${datos.mensaje}&hash=${Keys.hashNotificacion}`;
    fetch(url)
      .then((res: any) => {
        // return res.text() == 'OK';
        console.log(res.text())
      })
  }

 
}
