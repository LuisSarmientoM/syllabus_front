import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MateriaDTO } from 'src/app/interfaces/materia';
import { MateriasService } from 'src/app/services/materias.service';
@Component({
 selector: 'app-materias-list',
 templateUrl: './materias-list.component.html',
 styleUrls: ['./materias-list.component.css'],
})
export class MateriasListComponent implements OnInit, OnDestroy {
 materias: MateriaDTO[] = [];
 numeroMaterias: number;
 page_size: number = 5;
 page_number: number = 0;
 suscriber: Subscription;
 constructor(private _materiaService: MateriasService) {}
 ngOnDestroy(): void {
  this.suscriber.unsubscribe();
 }

 ngOnInit(): void {
  this.llenarMaterias();
 }

 llenarMaterias() {
  this.suscriber = this._materiaService
   .obtenerMaterias(this.page_number)
   .subscribe((res: any) => {
    this.materias = res.materias;
    this.numeroMaterias = res.contador;
   });
 }
 cambiaPagina(e: PageEvent) {
  this.page_size = e.pageSize;
  this.page_number = e.pageIndex + 1;

  this.llenarMaterias();
 }
 busqueda(e: string) {
  if (e) {
   this._materiaService.obtenerMateriasNombre(e).subscribe((res: any) => {
    this.materias = res.materias;
    this.numeroMaterias = res.contador;
   });
  } else {
   this.llenarMaterias();
  }
 }
}
