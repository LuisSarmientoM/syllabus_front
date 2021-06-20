import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MateriasRoutingModule } from "./materias-routing.module";
import { MateriasComponent } from "./materias.component";
import { MateriasListComponent } from "./materias-list/materias-list.component";
import { MaterialModule } from "src/app/material.module";
import { PaginatorPipe } from "src/app/pipe/paginator.pipe";
import { DetalleMateriaComponent } from "./detalle-materia/detalle-materia.component";
import { FormMateriaComponent } from "./form-materia/form-materia.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MateriasService } from "src/app/services/materias.service";
import { HttpClientModule } from "@angular/common/http";
import { UsuariosService } from "src/app/services/usuarios.service";
import { SharedModule } from "src/app/shared/shared.module";
import { MantenimientoService } from "src/app/services/mantenimiento.service";

@NgModule({
    declarations: [
        MateriasComponent,
        DetalleMateriaComponent,
        MateriasListComponent,
        FormMateriaComponent,
    ],
    imports: [
        CommonModule,
        MateriasRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
    ],
    providers: [MateriasService, UsuariosService, MantenimientoService],
})
export class MateriasModule {}
