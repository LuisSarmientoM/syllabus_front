import { Component, OnInit, Input } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { LoginService } from "src/app/components/login/login.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
    providers: [LoginService],
})
export class NavbarComponent implements OnInit {
    @Input() snav: MatSidenav;
    constructor(private loginService: LoginService) {}

    ngOnInit(): void {}

    cerrarSesion() {
        this.loginService.cerrarSesion();
    }
}
