import { AuthenticationStrategy } from "@loopback/authentication";
import { HttpErrors, Request } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import parseBearerToken from 'parse-bearer-token';
import { Keys } from "../config/keys";
const fetch = require('node-fetch')

export class AdminStrategy implements AuthenticationStrategy {
    name: string = 'admin';
  
    constructor(
    ) {}
  
    async authenticate(request: Request): Promise<UserProfile | undefined> {
      let token = parseBearerToken(request);
      if (token){
        let url = `${Keys.url_validar_token}?token=${token}&rol=${Keys.admin_rol}`
        let respuesta = ''
        await fetch(url)
            .then(async (res: any) => {
                respuesta = await res.text()
            });
        switch(respuesta){
            case "OK":
                let perfil: UserProfile = Object.assign({
                    admin: "OK"
                })
                return perfil;
                break;
            case "KO":
                throw new HttpErrors[401]('El rol no corresponde, tiene un token pero no es valido')
                break;
            case "":
                throw new HttpErrors[401]('El token enviado no es valido')
        }
      }else{
          throw new HttpErrors[401]("La solicitud no posee un token")
      }
    }
  
    
  }