import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento.component';
import { ListComponent } from './list/list.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SemestreComponent } from './semestre/semestre.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { CaracterComponent } from './caracter/caracter.component';
import { ComponenteComponent } from './componente/componente.component';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { FormComponent } from './form/form.component';

@NgModule({
 declarations: [
  MantenimientoComponent,
  ListComponent,
  SemestreComponent,
  CicloComponent,
  CaracterComponent,
  ComponenteComponent,
  FormComponent,
 ],
 imports: [
  CommonModule,
  MantenimientoRoutingModule,
  MaterialModule,
  ReactiveFormsModule,
  HttpClientModule,
 ],
 providers: [MantenimientoService],
})
export class MantenimientoModule {}
