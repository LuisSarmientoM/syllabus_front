import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MantenimientoService } from '../../../services/mantenimiento.service';

@Component({
 selector: 'app-semestre',
 templateUrl: './semestre.component.html',
 styleUrls: ['./semestre.component.css'],
})
export class SemestreComponent implements OnInit {
 semestres: { _id: string; descripcion: string; numero: number }[] = [];
 constructor(
  private _mantenimientoService: MantenimientoService,
  public router: Router
 ) {}

 ngOnInit(): void {
  this.getSemestres();
 }
 getSemestres(): void {
  this._mantenimientoService
   .obtenerMantenimiento('semestre')
   .subscribe((resp) => (this.semestres = resp));
 }
 crearNuevoSemestre() {
  this.router.navigate(['/mantenimiento/form'], {
   queryParams: {
    form: JSON.stringify([
     {
      name: 'descripcion',
      required: true,
      label: 'Descripción',
      value: null,
      type: 'text',
     },
     {
      name: 'number',
      required: true,
      label: 'Number',
      value: null,
      type: 'number',
     },
    ]),
    name: 'semestre',
   },
  });
 }
}
