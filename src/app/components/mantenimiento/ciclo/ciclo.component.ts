import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientoService } from '../../../services/mantenimiento.service';

@Component({
 selector: 'app-ciclo',
 templateUrl: './ciclo.component.html',
 styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent implements OnInit {
 ciclos: { _id: string; anio: number; periodo: number }[];
 constructor(
  private _mantenimientoService: MantenimientoService,
  public router: Router
 ) {}

 ngOnInit(): void {
  this.getCiclos();
 }
 getCiclos(): void {
  this._mantenimientoService
   .obtenerMantenimiento('ciclo')
   .subscribe((resp) => (this.ciclos = resp));
 }
 crearNuevoCiclo() {
  this.router.navigate(['/mantenimiento/form'], {
   queryParams: {
    form: JSON.stringify([
     {
      name: 'anio',
      required: true,
      label: 'Año',
      value: null,
      type: 'number',
     },
     {
      name: 'periodo',
      required: true,
      label: 'Periodo',
      value: null,
      type: 'number',
     },
    ]),
    name: 'ciclo',
   },
  });
 }
}
