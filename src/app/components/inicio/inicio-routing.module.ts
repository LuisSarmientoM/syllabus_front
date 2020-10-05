import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/services/guards/login.guard';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
 {
  path: '',
  component: InicioComponent,
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class InicioRoutingModule {}
