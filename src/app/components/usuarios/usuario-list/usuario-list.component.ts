import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { UsuariosService } from "src/app/services/usuarios.service";
import { UsuarioDTO } from "src/app/interfaces/usuario";

@Component({
    selector: "app-usuario-list",
    templateUrl: "./usuario-list.component.html",
    styleUrls: ["./usuario-list.component.css"]
})
export class UsuarioListComponent implements OnInit {
    usuarios: UsuarioDTO[];
    numeroUsuarios: number;
    page_size: number = 5;
    page_number: number = 0;
    constructor(private _usuarioService: UsuariosService) {}

    ngOnInit(): void {
        this.llenarUsuarios();
    }

    llenarUsuarios(): void {
        this._usuarioService
            .obtenerUsuarios(this.page_number)
            .subscribe((res: any) => {
                this.usuarios = [];
                this.usuarios = res.usuarios;
                this.numeroUsuarios = res.count;
            });
    }
    cambiaPagina(e: PageEvent) {
        this.page_size = e.pageSize;
        this.page_number = e.pageIndex;

        this.llenarUsuarios();
    }
    busqueda(e) {
        alert("aqui se hará el filtro");
    }
}
