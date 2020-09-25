import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MateriasListComponent } from "./materias-list/materias-list.component";
import { DetalleMateriaComponent } from "./detalle-materia/detalle-materia.component";
import { FormMateriaComponent } from "./form-materia/form-materia.component";

const routes: Routes = [
    {
        path: "",
        component: MateriasListComponent
    },
    {
        path: "nuevo",
        component: DetalleMateriaComponent
    },
    {
        path: ":id",
        component: DetalleMateriaComponent
    },
    {
        path: ":id/:seccion",
        component: FormMateriaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MateriasRoutingModule {}
