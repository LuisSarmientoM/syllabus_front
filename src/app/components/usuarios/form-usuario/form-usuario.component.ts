import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { Location } from "@angular/common";
import { UsuariosService } from "src/app/services/usuarios.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
    selector: "app-form-usuario",
    templateUrl: "./form-usuario.component.html",
    styleUrls: ["./form-usuario.component.css"]
})
export class FormUsuarioComponent implements OnInit, OnDestroy {
    form: FormGroup;
    id: string;
    sub: Subscription;
    constructor(
        private formBuilder: FormBuilder,
        public location: Location,
        private router: ActivatedRoute,

        private _usuarioService: UsuariosService
    ) {
        this.id = router.snapshot.paramMap.get("id");
        this.buildForm();
    }

    ngOnInit(): void {
        if (this.id) {
            this.getUsuario();
        }
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            nombre: [null, Validators.required],
            primerApellido: [null, Validators.required],
            segundoApellido: [null, Validators.required],
            numeroDocumento: [null, Validators.required],
            profesion: [null, Validators.required],
            username: [null, Validators.required],
            role: [null, Validators.required],
            correo: [null, [Validators.required, Validators.email]]
        });
    }

    getUsuario() {
        this.form.setValue({
            nombre: this.router.snapshot.queryParamMap.get("nombre"),
            primerApellido: this.router.snapshot.queryParamMap.get(
                "primerApellido"
            ),
            segundoApellido: this.router.snapshot.queryParamMap.get(
                "segundoApellido"
            ),
            numeroDocumento: this.router.snapshot.queryParamMap.get(
                "numeroDocumento"
            ),
            profesion: this.router.snapshot.queryParamMap.get("profesion"),
            username: this.router.snapshot.queryParamMap.get("username"),
            role: this.router.snapshot.queryParamMap.get("role"),
            correo: this.router.snapshot.queryParamMap.get("correo")
        });
    }
    get materias() {
        return this.form.get("materias") as FormArray;
    }
    agregarMateria() {
        this.materias.push(this.formBuilder.control(null, Validators.required));
    }
    guardar() {
        if (this.form.invalid) return;
        if (this.form.valid) {
            if (this.id) {
                this.sub = this._usuarioService
                    .actualizarUsuario(this.id, this.form.value)
                    .subscribe(asd => console.log(asd));
            } else {
                this.sub = this._usuarioService
                    .crearUsuario(this.form.value)
                    .subscribe(asd => {
                        console.log(asd);
                    });
            }
        }
    }

    regresar() {
        this.location.back();
        this.ngOnDestroy();
    }

    ngOnDestroy() {
        try {
            this.sub.unsubscribe();
        } catch {
            return;
        }
    }
}
