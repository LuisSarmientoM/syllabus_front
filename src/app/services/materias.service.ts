import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from '../components/login/login.service';
import {
 PrincipalDTO,
 MateriaDTO,
 DuracionDTO,
 MetodologiaDTO,
 MetasAprendizajeDTO,
 ContenidoTematicoDTO,
 CriterioEvaluacionDTO,
} from '../interfaces/materia';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MateriasService {
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

 crearMateria(data: PrincipalDTO) {
  this._http
   .post(`${this.url}/materia/crear`, { ...data }, this.httpOptions)
   .subscribe((materia) => {
    alert('Materia creada correctamente');
    this.router.navigate(['materias']);
   });
 }

 obtenerMaterias(pagina: number): Observable<MateriaDTO[]> {
  return this._http.get<[]>(
   `${this.url}/materia?pagina=${pagina}`,
   this.httpOptions
  );
 }

 obtenerMateria(_id: string) {
  return this._http.get(`${this.url}/materia/${_id}`, this.httpOptions);
 }
 obtenerVersion(_id: string, _idVersion: string) {
  return this._http.get(
   `${this.url}/materia/version/${_id}-${_idVersion}`,
   this.httpOptions
  );
 }
 crearVersion(_id: string) {
  this._http
   .put(`${this.url}/materia/${_id}`, {}, this.httpOptions)
   .subscribe();
 }

 // localhost:3000/materia/5ebab32b52fa675344d7717d
 obtenerDataMateria(
  _id: string,
  seccion: string
 ): Observable<
  | PrincipalDTO
  | DuracionDTO
  | MetodologiaDTO
  | MetasAprendizajeDTO
  | ContenidoTematicoDTO
  | CriterioEvaluacionDTO
 > {
  return this._http.get<PrincipalDTO>(
   `${this.url}/materia/${seccion}/${_id}`,
   this.httpOptions
  );
 }

 actualizarMateria(
  _id: string,
  data:
   | PrincipalDTO
   | DuracionDTO
   | MetodologiaDTO
   | MetasAprendizajeDTO
   | ContenidoTematicoDTO
   | CriterioEvaluacionDTO,
  seccion: string
 ) {
  this._http
   .put<
    | PrincipalDTO
    | DuracionDTO
    | MetodologiaDTO
    | MetasAprendizajeDTO
    | CriterioEvaluacionDTO
   >(`${this.url}/materia/${seccion}/${_id}`, data, this.httpOptions)
   .subscribe((res) => {
    alert('Materia creada correctamente');
    // this.router.navigate(["materias"]);
   });
 }
 deleteContenidoTematico(
  materia: MateriaDTO,
  { _id, unidadTematica }: ContenidoTematicoDTO
 ) {
  this._http
   .delete(
    `${this.url}/materia/contenido/${materia._id}-${_id}`,
    this.httpOptions
   )
   .subscribe((data) => {
    alert(`${unidadTematica} A sido eliminado`);
   });
 }
 deleteMetaAprendizaje(
  materia: MateriaDTO,
  _id: string,
  type:
   | 'competenciasBasicas'
   | 'competenciasGenericas'
   | 'competenciasEspecificas'
 ) {
  this._http
   .delete(
    `${this.url}/materia/metas/${materia._id}-${_id}/${type}`,
    this.httpOptions
   )
   .subscribe((data) => {
    alert(`Se eliminó la meta correctamente`);
   });
 }
}
