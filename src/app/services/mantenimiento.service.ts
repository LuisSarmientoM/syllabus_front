import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from '../components/login/login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { semestreDTO } from '../interfaces/semestre';
import { Observable } from 'rxjs';
import { CicloDTO } from '../interfaces/ciclo';
import { ComponenteDTO } from '../interfaces/componente';
import { CaracterDTO } from '../interfaces/caracter';

@Injectable({
 providedIn: 'root',
})
export class MantenimientoService {
 private url = environment.URL_SERVICIO;

 httpOptions = {
  headers: new HttpHeaders({
   Authorization: 'bearer ' + this._login.obtenerJWT(),
  }),
 };
 constructor(
  private _http: HttpClient,
  private _login: LoginService,
  private router: Router
 ) {}

 crearMantenimiento(
  data: semestreDTO | CicloDTO | ComponenteDTO | CaracterDTO,
  name: string
 ) {
  this._http
   .post(`${this.url}/mantenimiento/${name}/crear`, data, this.httpOptions)
   .subscribe((semestre) => {
    alert('Materia creada correctamente');
    console.log(semestre);

    this.router.navigate([`mantenimiento/${name}`]);
   });
 }
 obtenerMantenimiento(name: string): Observable<[]> {
  return this._http.get<[]>(
   `${this.url}/mantenimiento/${name}/obtener`,
   this.httpOptions
  );
 }
}
