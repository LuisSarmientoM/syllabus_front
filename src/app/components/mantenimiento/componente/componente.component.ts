import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
 selector: 'app-componente',
 templateUrl: './componente.component.html',
 styleUrls: ['./componente.component.css'],
})
export class ComponenteComponent implements OnInit {
 componentes: { _id: string; componente: string }[];
 constructor(
  private _mantenimientoService: MantenimientoService,
  public router: Router
 ) {}

 ngOnInit(): void {
  this.getComponente();
 }
 getComponente(): void {
  this._mantenimientoService
   .obtenerMantenimiento('componente')
   .subscribe((resp) => (this.componentes = resp));
  console.log(this.componentes);
 }
 crearNuevoComponente() {
  this.router.navigate(['/mantenimiento/form'], {
   queryParams: {
    form: JSON.stringify([
     {
      name: 'componente',
      required: true,
      label: 'Componente',
      value: null,
      type: 'text',
     },
    ]),
    name: 'componente',
   },
  });
 }
}
