import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { UsuarioLoginDTO } from "../../interfaces/usuarioLogin";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
    private url = environment.URL_SERVICIO;
    constructor(private _http: HttpClient, private router: Router) {}

    login(_usuarioLogin: UsuarioLoginDTO) {
        this._http.post(`${this.url}/login`, { ..._usuarioLogin }).subscribe(
            ({ ...usuario }) => {
                localStorage.setItem("Authorization", JSON.stringify(usuario[0]));
                localStorage.setItem("Usuario", JSON.stringify(usuario[1]));
                this.router.navigate(["/inicio"]);
            },
            (err) => {
                alert("Usuario o contraseña incorrecta");
            }
        );
    }

    verificaJWT() {
        return this._http.get(`${this.url}/login`, {
            headers: new HttpHeaders({ Authorization: this.obtenerJWT() }),
        });
    }

    obtenerJWT(): string {
        try {
            return `bearer ${JSON.parse(localStorage.getItem("Authorization")).access_token}`;
        } catch (error) {
            return "";
        }
    }
    obtenerUsuario() {
        return JSON.parse(localStorage.getItem("Usuario"));
    }
    cerrarSesion() {
        this.router.navigate(["/login"]);
        localStorage.clear();
    }
}
