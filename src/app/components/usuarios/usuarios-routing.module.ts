import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsuarioListComponent } from "./usuario-list/usuario-list.component";
import { DetalleUsuarioComponent } from "./detalle-usuario/detalle-usuario.component";
import { FormUsuarioComponent } from "./form-usuario/form-usuario.component";

const routes: Routes = [
    {
        path: "",
        component: UsuarioListComponent
    },
    {
        path: "nuevo",
        component: FormUsuarioComponent
    },
    {
        path: ":id",
        component: DetalleUsuarioComponent
    },
    {
        path: ":id/editar",
        component: FormUsuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
