import { Component, OnInit } from '@angular/core';
import {
 FormGroup,
 FormBuilder,
 FormArray,
 Validators,
 FormControl,
} from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MateriasService } from '../../../services/materias.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { MantenimientoService } from "../../../services/mantenimiento.service";
@Component({
 selector: 'app-form-materia',
 templateUrl: './form-materia.component.html',
 styleUrls: ['./form-materia.component.css'],
})
export class FormMateriaComponent implements OnInit {
 form: FormGroup;
 seccion: string;
 data: any[] = [];
 id: string;
 idMeta: string;
 multibtn = true;
 usuarios: any[] = [];
 semestre: any[] =[];
caracter: any[] =[];
ciclo: any[] =[];
componente: any = []
 selected;
 constructor(
  private formBuilder: FormBuilder,
  private ns: NavigationService,
  private router: ActivatedRoute,
  public location: Location,
  private _materiaService: MateriasService,
  private _usuariosService: UsuariosService,
  private _mantenimientoService: MantenimientoService
 ) {
  this.seccion = router.snapshot.paramMap.get('seccion');
  this.id = router.snapshot.paramMap.get('id');
  this.buildForm();
 }

 ngOnInit(): void {}
 private async buildForm() {
  // Construit el Formulario

  const llenar = (res: any) => {
   let array = {};
   for (const campo of this.ns.get(this.seccion)) this.data.push(campo);

   this.data.forEach((item) => {
    if (item.type === 'array') {
     array[item.key] = this.formBuilder.array([]);
     let i = 0;
     if (this.seccion !== 'criterio') {
      for (const value of res[item.key]) {
       item.controls.push({
        key: String(i),
        defaultValue: value,
        label: item.label,
        required: Validators.required,
        type: 'textbox',
       });

       i++;

       array[item.key].push(this.formBuilder.control(value));
      }
     } else {
      for (const value of res.tipo) {
       item.controls.push([
        {
         key: 'tituloTipo',
         defaultValue: value.tituloTipo,
         label: 'Titulo',
         required: Validators.required,
         type: 'textbox',
        },
        {
         key: 'porcentajeTipo',
         defaultValue: value.porcentajeTipo,
         label: 'Porcentaje',
         required: Validators.required,
         type: 'number',
        },
        {
         key: 'detalleTipo',
         defaultValue: value.detalleTipo,
         label: 'Detalle tipo',
         required: Validators.required,
         type: 'array',
        },
       ]);
       array[item.key].push(
        this.formBuilder.group({
         tituloTipo: this.formBuilder.control(value.tituloTipo),
         porcentajeTipo: this.formBuilder.control(value.porcentajeTipo),
         detalleTipo: this.formBuilder.array(value.detalleTipo),
        })
       );
       i++;
      }
     }
    } else {
     if (item.key === 'docente') {
      this.getUsuarios();

      item.option = this.usuarios;
     }
     else if (item.key === 'semestre') {
      this.getSemestre();

      item.option = this.semestre;
     }
     else if (item.key === 'caracter') {
      this.getcaracter();

      item.option = this.caracter;
     }
     else if (item.key === 'ciclo') {
      this.getciclo();

      item.option = this.ciclo;
     }
     else if (item.key === 'componente') {
      this.getcomponente();

      item.option = this.componente;
     }

     array[item.key] = [res[item.key], item.required];
    }
   });
   this.selected = res.docente;

   this.form = this.formBuilder.group(array);
  };
  if (this.id !== 'nuevo') {
   this._materiaService
    .obtenerDataMateria(this.id, this.seccion)
    .subscribe((res: any) => {
     if (this.id.split('-')[1] === 'nuevo' && this.seccion === 'contenido') {
      res = {
       temaSubTema: [],
       estrategias: [],
       bibliografia: [],
       unidadTematica: '',
      };
     } else if (
      this.id.split('-')[1] === 'nuevo' &&
      this.seccion === 'criterio'
     ) {
      res = {
       tipo: [
        {
         detalleTipo: [],
         tituloTipo: '',
         porcentajeTipo: null,
        },
       ],
       notaPorcentaje: null,
       numeroSemanas: null,
      };
     } else if (this.id.split('-')[1] === 'nuevo' && this.seccion === 'metas') {
      res = {
       titulo: '',
       descripcion: [''],
      };
     }

     llenar(res);
    });
  } else {
   llenar('');
  }
 }
 private getUsuarios() {
   this.usuarios = []
  this._usuariosService.obtenerTodosUsuarios().subscribe((res: any) => {
   for (const usuario of res) {
    this.usuarios.push({
     key: usuario._id,
     value: `${usuario.nombre} ${usuario.primerApellido} ${usuario.segundoApellido}`,
    });
   }
  });
 }
 private getSemestre() {
  this._mantenimientoService.obtenerMantenimiento('semestre').subscribe((res: any) => {
   for (const semestre of res) {
    this.semestre.push({
     key: semestre._id,
     value: semestre.descripcion,
    });
   }
  });
 }
 private getcaracter() {
  this._mantenimientoService.obtenerMantenimiento('caracter').subscribe((res: any) => {
   for (const caracter of res) {
    this.caracter.push({
     key: caracter._id,
     value: caracter.caracter,
    });
   }
  });
 }
 private getciclo() {
  this._mantenimientoService.obtenerMantenimiento('ciclo').subscribe((res: any) => {
   for (const ciclo of res) {
    this.ciclo.push({
     key: ciclo._id,
     value: `${ciclo.anio}-${ciclo.periodo}`,
    });
   }
  });
 }
 private getcomponente() {
  this._mantenimientoService.obtenerMantenimiento('componente').subscribe((res: any) => {
   for (const componente of res) {
    this.componente.push({
     key: componente._id,
     value: componente.componente
    });
   }
  });
 }

 selectUsuario(user1: any, user2: any) {
  if (this.id === 'nuevo') {
   return;
  }
  return user1 === user2._id;
 }

 getForm(campoKey) {
  return this.form.get(campoKey) as FormArray;
 }
 addControl(campo, index) {
  let newControl: any;
  if (this.seccion === 'criterio') {
   newControl = this.ns.getCampo(this.seccion);

   this.getForm('tipo').push(
    this.formBuilder.group({
     tituloTipo: this.formBuilder.control(newControl[0].defaultValue),
     porcentajeTipo: this.formBuilder.control(newControl[1].defaultValue),
     detalleTipo: this.formBuilder.array(newControl[2].defaultValue),
    })
   );

   this.data[2].controls.push(newControl);
  } else {
   const control: any = this.ns.getCampo(
    this.seccion,
    campo.controls.length | 0,
    campo.label,
    'textbox'
   );

   this.getForm(campo.key).push(
    this.formBuilder.control(control.defaultValue, control.required)
   );
   this.data[index].controls.push(control);
  }
 }
 async addDetalle(indexTipo) {
  const control = this.form.get(`tipo.${indexTipo}.detalleTipo`) as FormArray;

  control.push(new FormControl(''));
  this.data[2].controls[indexTipo][2].defaultValue.push('nuevo');
 }
 eliminar(campoKey, index: number, indexTipo?): void {
  if (this.seccion === 'criterio') {
   let tipo = this.getForm(campoKey).controls[indexTipo].get(
    'detalleTipo'
   ) as FormArray;
   tipo.removeAt(index);

   this.data[2].controls[indexTipo][2].defaultValue.splice(index, 1);
  } else {
   this.getForm(campoKey).removeAt(index);
  }
 }
 guardar() {
  if (this.form.invalid) return;
  if (this.id === 'nuevo') {
   this._materiaService.crearMateria(this.form.value);
  } else {
   this._materiaService.actualizarMateria(
    this.id,
    this.form.value,
    this.seccion
   );
  }
 }

 regresar() {
  this.location.back();
 }
}
