import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginGuard } from "../services/guards/login.guard";

const routes: Routes = [
    {
        path: "",
        component: SidebarComponent,

        children: [
            {
                path: "inicio",
                loadChildren: () => import("../components/inicio/inicio.module").then((m) => m.InicioModule),
            },
            {
                path: "materias",
                canActivate: [LoginGuard],
                loadChildren: () => import("../components/materias/materias.module").then((m) => m.MateriasModule),
            },
            {
                path: "usuarios",
                canActivate: [LoginGuard],
                loadChildren: () => import("../components/usuarios/usuarios.module").then((m) => m.UsuariosModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SharedRoutingModule {}
