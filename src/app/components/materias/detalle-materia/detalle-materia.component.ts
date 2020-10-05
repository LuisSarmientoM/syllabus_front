import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MateriasService } from 'src/app/services/materias.service';
import { ActivatedRoute } from '@angular/router';
import {
 MateriaDTO,
 ContenidoTematicoDTO,
 Version,
 Meta,
} from '../../../../app/interfaces/materia';

@Component({
 selector: 'app-detalle-materia',
 templateUrl: './detalle-materia.component.html',
 styleUrls: ['./detalle-materia.component.css'],
})
export class DetalleMateriaComponent implements OnInit {
 materia: MateriaDTO = null;
 notas;
 isOld = false;
 _id: string;
 _idOld: string;
 constructor(
  public location: Location,
  private _materiaService: MateriasService,
  private router: ActivatedRoute
 ) {
  this._id = router.snapshot.paramMap.get('id');
 }
 versiones: Version[];
 ngOnInit(): void {
  this._materiaService
   .obtenerMateria(this._id)
   .subscribe((res: { materia: MateriaDTO; versiones: any }) => {
    this.materia = res.materia;
    this.versiones = res.versiones;
   });
 }
 descargar() {
  this._materiaService
   .generarDocumento(this._id, this._idOld)
   .subscribe((res) => {
    const pdf = new Blob([res], {
     type: 'application/pdf',
     endings: 'transparent',
    });

    window.open(URL.createObjectURL(pdf));
   });
 }
 regresar() {
  this.location.back();
 }
 deleteContenidoTematico(
  materia: MateriaDTO,
  contenidoTematico: ContenidoTematicoDTO
 ) {
  this._materiaService.deleteContenidoTematico(materia, contenidoTematico);
 }
 deleteMetaAprendizaje(
  materia: MateriaDTO,
  meta: Meta,
  type:
   | 'competenciasBasicas'
   | 'competenciasGenericas'
   | 'competenciasEspecificas'
 ) {
  if (confirm(`¿Está seguro de que quiere eliminar ${meta.titulo}?`)) {
   this._materiaService.deleteMetaAprendizaje(materia, meta._id, type);
  }
 }
 version(event: string) {
  this.isOld = true;
  this._idOld = event;

  this._materiaService
   .obtenerVersion(this._id, event)
   .subscribe((data: MateriaDTO) => {
    this.materia = data;
   });
 }
 archivar() {
  if (confirm('¿Esta seguro de archivar esta version y crear una nueva?')) {
   this._materiaService.crearVersion(this._id);
  }
 }
}
