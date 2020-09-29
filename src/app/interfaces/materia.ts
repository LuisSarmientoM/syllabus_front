import { UsuarioDTO } from './usuario';

export class PrincipalDTO {
 readonly codigoMateria: number;
 readonly numeroCreditos: number;
 readonly nombreMateria: number;
 readonly semestre: number;
 readonly caracter: string;
 readonly ciclo: string;
 readonly componente: string;
 readonly docente: UsuarioDTO;
}
export interface DuracionDTO {
 readonly numeroSemanas: number;
 readonly numeroHorasSemanales: number;
 readonly numeroHorasAcompanamientoTeorico: number;
 readonly numeroHorasAcompanamientoPractico: number;
 readonly numeroHorasAcompanamientoTotal: number;
 readonly numeroHorasIndependienteTeorico: number;
 readonly numeroHorasIndependientePractico: number;
 readonly numeroHorasIndependienteTotal: number;
}

export interface DescripcionDTO {
 readonly descripcion: string;
}
export interface MetodologiaDTO {
 readonly metodologia: string;
}
export class Meta {
 titulo?: string;
 _id: string;
 descripcion: string[];
}
export interface MetasAprendizajeDTO {
 readonly competenciasBasicas: Meta[];
 readonly competenciasGenericas: Meta[];
 readonly competenciasEspecificas: Meta[];
}
export interface ContenidoTematicoDTO {
 readonly unidadTematica: string;
 readonly temaSubTema: string[];
 readonly estrategias: string[];
 readonly bibliografia: string[];
 readonly _id?: string;
}
export interface CriterioEvaluacionDTO {
 readonly notaPorcentaje: number;
 readonly numeroSemanas: number;
 readonly tipo: {
  readonly tituloTipo: string;
  readonly detalleTipo: string[];
  readonly porcentajeTipo: number;
 }[];
 readonly _id?: string;
}
export class MateriaDTO {
 readonly _id: string;
 readonly principal: PrincipalDTO;
 readonly duracion: DuracionDTO;
 readonly descripcion: DescripcionDTO;
 readonly metodologia: MetodologiaDTO;
 readonly metasAprendizaje: MetasAprendizajeDTO;
 readonly contenidoTematico: ContenidoTematicoDTO[];
 readonly criterioEvaluacion: CriterioEvaluacionDTO[];
}
export class Version {
 readonly version: string;
 readonly _id: string;
}
