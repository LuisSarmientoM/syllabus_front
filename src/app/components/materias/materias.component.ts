import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-materias",
    template: `
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class MateriasComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
