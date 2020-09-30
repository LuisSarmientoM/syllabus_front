import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
 selector: 'app-inicio',
 templateUrl: './inicio.component.html',
 styles: [
  `
   div {
    margin: 0 auto;
    display: block;
    width: 70%;
    text-align: center;
   }
  `,
 ],
})
export class InicioComponent implements OnInit {
 usuario: {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
 };
 constructor(private loginService: LoginService) {}

 ngOnInit(): void {
  this.usuario = this.loginService.obtenerUsuario();
 }
}
