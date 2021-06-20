import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaracterComponent } from './caracter/caracter.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { ComponenteComponent } from './componente/componente.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SemestreComponent } from './semestre/semestre.component';
const routes: Routes = [
 {
  path: '',
  component: ListComponent,
 },
 {
  path: 'semestre',
  component: SemestreComponent,
 },
 {
  path: 'ciclo',
  component: CicloComponent,
 },
 {
  path: 'caracter',
  component: CaracterComponent,
 },
 {
  path: 'componente',
  component: ComponenteComponent,
 },
 {
  path: 'form',
  component: FormComponent,
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class MantenimientoRoutingModule {}
