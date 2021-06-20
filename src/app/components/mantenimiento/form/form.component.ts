import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
 selector: 'app-form',
 templateUrl: './form.component.html',
 styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
 formArray: {
  name: string;
  required: boolean;
  label: string;
  value: string;
  type: string;
 }[] = [];
 form: FormGroup = new FormGroup({});
 name: string;
 constructor(
  public route: ActivatedRoute,
  public formBuilder: FormBuilder,
  private _mantenimientoService: MantenimientoService
 ) {
  route.queryParams.subscribe((query) => {
   this.formArray = JSON.parse(query.form);
   this.name = query.name;
  });
 }

 ngOnInit(): void {
  this.makeForm();
 }
 makeForm() {
  const algo: any = {};
  this.formArray.forEach((f, i) => {
   algo[f.name] = [f.value, f.required ? Validators.required : []];
  });

  this.form = this.formBuilder.group(algo);
 }

 submit() {
  if (this.form.invalid) return;
  this._mantenimientoService.crearMantenimiento(this.form.value, this.name);
 }
}
