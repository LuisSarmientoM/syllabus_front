import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
 selector: 'app-caracter',
 templateUrl: './caracter.component.html',
 styleUrls: ['./caracter.component.css'],
})
export class CaracterComponent implements OnInit {
 caracteres: { _id: string; caracter: string }[] = [];
 constructor(
  private _mantenimientoService: MantenimientoService,
  public router: Router
 ) {}

 ngOnInit(): void {
  this.getsCaracter();
 }
 getsCaracter(): void {
  this._mantenimientoService
   .obtenerMantenimiento('caracter')
   .subscribe((resp) => (this.caracteres = resp));
  console.log(this.caracteres);
 }
 crearNuevoCaracter() {
  this.router.navigate(['/mantenimiento/form'], {
   queryParams: {
    form: JSON.stringify([
     {
      name: 'caracter',
      required: true,
      label: 'Caracter',
      value: null,
      type: 'text',
     },
    ]),
    name: 'caracter',
   },
  });
 }
}
