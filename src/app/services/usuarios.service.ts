import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioDTO } from '../interfaces/usuario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/login.service';
@Injectable()
export class UsuariosService {
 private url = environment.URL_SERVICIO;
 httpOptions = {
  headers: new HttpHeaders({
   Authorization: 'bearer ' + this._login.obtenerJWT(),
  }),
 };
 constructor(private _http: HttpClient, private _login: LoginService) {}

 crearUsuario(data: UsuarioDTO) {
  return this._http.post(
   `${this.url}/usuario/crear`,
   { ...data },
   this.httpOptions
  );
 }

 obtenerUsuarios(pagina: number): Observable<[]> {
  return this._http.get<[]>(
   `${this.url}/usuario?pagina=${pagina}`,
   this.httpOptions
  );
 }
 obtenerTodosUsuarios(): Observable<[]> {
  return this._http.get<[]>(`${this.url}/usuario/todos`, this.httpOptions);
 }
 obtenerUsuario(_id: string): Observable<UsuarioDTO> {
  return this._http.get<UsuarioDTO>(
   `${this.url}/usuario/${_id}`,
   this.httpOptions
  );
 }
 actualizarUsuario(_id: string, usuario: UsuarioDTO): Observable<UsuarioDTO> {
  return this._http.put<UsuarioDTO>(
   `${this.url}/usuario/editar?_id=${_id}`,
   usuario,
   this.httpOptions
  );
 }

 cambiarEstadoUsuario(_id: string, estado: boolean) {
  this._http
   .put<UsuarioDTO>(
    `${this.url}/usuario/editar/estado?_id=${_id}`,
    {
     estado,
    },
    this.httpOptions
   )
   .subscribe()
   .unsubscribe();
 }
}
