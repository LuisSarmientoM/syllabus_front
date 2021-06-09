import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/guards/login.guard';

const routes: Routes = [
 {
  path: 'login',
  loadChildren: () =>
   import('./components/login/login.module').then((m) => m.LoginModule),
 },
 {
  path: '',
  loadChildren: () =>
   import('./shared/shared.module').then((m) => m.SharedModule),
 },
];

@NgModule({
 imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
 exports: [RouterModule],
})
export class AppRoutingModule {}
