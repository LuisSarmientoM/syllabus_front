import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from 'src/app/components/login/login.service';

@Component({
 selector: 'app-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
 mobileQuery: MediaQueryList;

 subscription: Subscription = new Subscription();
 private _mobileQueryListener: () => void;
 usuario: {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  role: string;
 };
 constructor(
  private media: MediaMatcher,
  private changeDetectorRef: ChangeDetectorRef,
  private loginService: LoginService
 ) {}

 ngOnInit(): void {
  this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
  this.usuario = this.loginService.obtenerUsuario();
 }
 ngOnDestroy() {
  this.subscription.unsubscribe();
 }
}
