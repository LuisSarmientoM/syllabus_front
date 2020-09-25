import { PrincipalDTO, MateriaDTO } from "./materia";

export class UsuarioDTO {
    readonly nombre: string;
    readonly primerApellido: string;
    readonly segundoApellido: string;
    readonly numeroDocumento: number;
    readonly profesion: string;
    readonly username: string;
    readonly password: string;
    readonly correo: string;
    readonly _id: string;
    readonly estado: boolean;
    readonly role: boolean;
    readonly materias: MateriaDTO[];
}
