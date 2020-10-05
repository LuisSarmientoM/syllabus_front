import { Injectable } from '@angular/core';
import {
 HttpClient,
 HttpErrorResponse,
 HttpHeaders,
} from '@angular/common/http';
import { UsuarioLoginDTO } from '../../interfaces/usuarioLogin';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/interfaces/usuario';

@Injectable()
export class LoginService {
 private url = environment.URL_SERVICIO;
 constructor(private _http: HttpClient, private router: Router) {}

 login(_usuarioLogin: UsuarioLoginDTO) {
  this._http
   .post<{ token: string; user: {} }>(`${this.url}/login`, { ..._usuarioLogin })
   .subscribe(
    ({ token, user }) => {
     localStorage.setItem('Authorization', JSON.stringify(token));
     localStorage.setItem('Usuario', JSON.stringify(user));
     this.router.navigate(['/inicio']);
    },
    (err) => {
     alert('Usuario o contraseña incorrecta');
    }
   );
 }

 verificaJWT() {
  const token = this.obtenerJWT();
  return this._http.get<{ ok: true; token: string; user: UsuarioDTO }>(
   `${this.url}/login/renew`,
   {
    headers: {
     'x-token': token,
    },
   }
  );
 }

 obtenerJWT(): string {
  try {
   return `${JSON.parse(localStorage.getItem('Authorization'))}`;
  } catch (error) {
   return '';
  }
 }
 setJWT(token: string): void {
  localStorage.removeItem('Authorization');
  localStorage.setItem('Authorization', JSON.stringify(token));
 }
 obtenerUsuario() {
  return JSON.parse(localStorage.getItem('Usuario')) || { role: '' };
 }
 cerrarSesion() {
  this.router.navigate(['/login']);
  localStorage.clear();
 }
}
