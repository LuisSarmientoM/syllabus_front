import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsuariosRoutingModule } from "./usuarios-routing.module";
import { UsuariosComponent } from "./usuarios.component";
import { UsuarioListComponent } from "./usuario-list/usuario-list.component";
import { MaterialModule } from "src/app/material.module";
// import { PaginatorPipe } from "src/app/pipe/paginator.pipe";
import { DetalleUsuarioComponent } from "./detalle-usuario/detalle-usuario.component";
import { FormUsuarioComponent } from "./form-usuario/form-usuario.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UsuariosService } from "src/app/services/usuarios.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        UsuariosComponent,
        UsuarioListComponent,
        DetalleUsuarioComponent,
        FormUsuarioComponent
    ],
    imports: [
        CommonModule,
        UsuariosRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [UsuariosService]
})
export class UsuariosModule {}
