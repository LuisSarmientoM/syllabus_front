import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MateriaDTO } from "src/app/interfaces/materia";
import { MateriasService } from "src/app/services/materias.service";
@Component({
    selector: "app-materias-list",
    templateUrl: "./materias-list.component.html",
    styleUrls: ["./materias-list.component.css"]
})
export class MateriasListComponent implements OnInit {
    materias: MateriaDTO[] = [];
    numeroMaterias: number;
    page_size: number = 5;
    page_number: number = 1;
    constructor(private _materiaService: MateriasService) {}

    ngOnInit(): void {
        this.llenarMaterias();
    }

    llenarMaterias() {
        this._materiaService
            .obtenerMaterias(this.page_number)
            .subscribe((res: any) => {
                this.materias = res.materias;
                this.numeroMaterias = res.contador;
            });
    }
    cambiaPagina(e: PageEvent) {
        this.page_size = e.pageSize;
        this.page_number = e.pageIndex + 1;

        this.llenarMaterias();
    }
    busqueda(e) {
        alert("aqui se hará el filtro");
    }
}
