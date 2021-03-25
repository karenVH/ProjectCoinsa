import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Las cabeceras http de cliente y de la aplicacion.
import { Observable } from 'rxjs'; // El iterador de objetos
import { GLOBAL } from './globalsrc';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headers;
  public url;

  constructor(
    // En el constructor vamos a pasar los métodos aceptados por el protocolo http, los ponemos en una variable para que podamos invocarlos en las funciones siguientes:
        private _http: HttpClient
  ) {
    // Dentro del constructor, pasamos la url de la api, puesto que es allí donde se ejecutan los controles:
       this.url = GLOBAL.url;
       this.headers = new HttpHeaders().set('Content-Type','application/json');
  }

  //  Función de login:
   login(usuario: User): Observable<any>{
       let params = JSON.stringify(usuario);
       console.log(params);
       console.log(this.url);
       return this._http.post(this.url+'/ingreso', params, {headers: this.headers});
   }
}
