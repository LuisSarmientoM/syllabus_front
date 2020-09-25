import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { UsuariosService } from "src/app/services/usuarios.service";
import { ActivatedRoute } from "@angular/router";
import { UsuarioDTO } from "src/app/interfaces/usuario";
import { Subscription } from "rxjs";

@Component({
    selector: "app-detalle-usuario",
    templateUrl: "./detalle-usuario.component.html",
    styleUrls: ["./detalle-usuario.component.css"],
})
export class DetalleUsuarioComponent implements OnInit, OnDestroy {
    _id: string;
    usuario: UsuarioDTO;
    usuarioSuscribe: Subscription;
    constructor(public location: Location, private _usuarioService: UsuariosService, private router: ActivatedRoute) {
        this._id = router.snapshot.paramMap.get("id");
    }

    ngOnInit(): void {
        this.usuarioSuscribe = this._usuarioService.obtenerUsuario(this._id).subscribe((res) => (this.usuario = res));
    }

    regresar() {
        this.location.back();
    }

    deshabilitar() {
        if (confirm("¿Seguro que desea deshabilitar este usuario?")) {
            this._usuarioService.cambiarEstadoUsuario(this.usuario._id, !this.usuario.estado);
        }
    }

    ngOnDestroy(): void {
        this.usuarioSuscribe.unsubscribe;
    }
}
