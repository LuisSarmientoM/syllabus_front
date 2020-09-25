import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/components/login/login.service";
import { UsuarioDTO } from "src/app/interfaces/usuario";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private _loginService: LoginService, private router: Router) {}
    async canActivate() {
        return Boolean(
            this._loginService.verificaJWT().subscribe(
                (res) => {
                    if (res) return true;
                },
                (err) => {
                    this.router.navigate(["/login"]);

                    if (err) return false;
                }
            )
        );
        // return true;
        //     console.log(token);
        //     return false;
        // });
    }
}
//     console.log(token);

//     if (token === "ADMINISTRADOR_ROLE") {
//         return true;
//     } else {
//         this.router.navigate(["/login"]);
//         return false;
//     }
// });
