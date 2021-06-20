import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
@Injectable({
    providedIn: "root",
})
export class NavigationService {
    constructor() {}

    get(seccion: string) {
        if (seccion === "principal") {
            return [
                {
                    key: "nombreMateria",
                    label: "Nombre de la Materia",
                    defaultValue: "",
                    required: Validators.required,
                    type: "textbox",
                },
                {
                    key: "codigoMateria",
                    label: "Codigo de la Materia",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroCreditos",
                    label: "Numero de Creditos",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "semestre",
                    label: "Semestre",
                    defaultValue: "",
                    required: Validators.required,
                    type: "select",
                    option: []
                },
                {
                    key: "caracter",
                    label: "Caracter Asignatura",
                    defaultValue: null,
                    required: Validators.required,
                    type: "select",
                    option: [],
                },
                {
                    key: "ciclo",
                    label: "Ciclo",
                    defaultValue: "",
                    required: Validators.required,
                    type: "select",
                    option: []
                },
                {
                    key: "componente",
                    label: "Componente Asignatura",
                    defaultValue: "",
                    required: Validators.required,
                    type: "select",
                    option: [],
                },
                {
                    key: "docente",
                    label: "Docente",
                    defaultValue: "",
                    required: Validators.required,
                    type: "select",
                    option: [],
                },
            ];
        }

        if (seccion === "duracion") {
            return [
                {
                    key: "numeroSemanas",
                    label: "Numero de semanas",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroHorasAcompanamientoTeorico",
                    label: "Numero de Horas de Acompañamiento Teorico",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroHorasAcompanamientoPractico",
                    label: "Numero de Horas de Acompañamiento Practico",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroHorasIndependienteTeorico",
                    label: "Numero de Horas de Independiente Teorico",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroHorasIndependientePractico",
                    label: "Numero de Horas de Independiente Practico",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
            ];
        }

        if (seccion === "descripcion") {
            return [
                {
                    key: "descripcion",
                    label: "Descripcion de la asignatura",
                    defaultValue: "",
                    required: Validators.required,
                    type: "textarea",
                },
            ];
        }

        if (seccion === "metodologia") {
            return [
                {
                    key: "metodologia",
                    label: "Metodologia de la asignatura",
                    defaultValue: "",
                    required: Validators.required,
                    type: "textarea",
                },
            ];
        }

        if (seccion === "metas") {
            return [
                {
                    key: "titulo",
                    label: "Titulo de la competencia",
                    defaultValue: "",
                    required: "",
                    type: "textbox",
                },
                {
                    key: "descripcion",
                    label: "Descripcion de la competencia",
                    defaultValue: "",
                    required: Validators.required,
                    type: "array",
                    controls: [],
                },
            ];
        }

        if (seccion === "contenido") {
            return [
                {
                    key: "unidadTematica",
                    label: "Unidad Tematica",
                    defaultValue: "",
                    required: Validators.required,
                    type: "textbox",
                },
                {
                    key: "temaSubTema",
                    label: "Temas o Subtemas",
                    defaultValue: "",
                    required: Validators.required,
                    type: "array",
                    controls: [],
                },
                {
                    key: "estrategias",
                    label: "Estrategias metodologicas, pedagogicas y recursos",
                    defaultValue: "",
                    required: Validators.required,
                    type: "array",
                    controls: [],
                },
                {
                    key: "bibliografia",
                    label: "Bibliografia",
                    defaultValue: "",
                    required: Validators.required,
                    type: "array",
                    controls: [],
                },
            ];
        }

        if (seccion === "criterio") {
            return [
                {
                    key: "notaPorcentaje",
                    label: "Porcentaje de Evaluacion",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "numeroSemanas",
                    label: "Numero de semanas",
                    defaultValue: "",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "tipo",
                    label: "Tipo Evaluacion",
                    defaultValue: "",
                    required: Validators.required,
                    type: "array",
                    controls: [],
                },
            ];
        }
    }
    getCampo(seccion?: string, index?: number, label?: string, type?: string, key?: string) {
        if (seccion === "criterio") {
            return [
                {
                    key: "tituloTipo",
                    defaultValue: "",
                    label: "Titulo",
                    required: Validators.required,
                    type: "textbox",
                },
                {
                    key: "porcentajeTipo",
                    defaultValue: "",
                    label: "Porcentaje",
                    required: Validators.required,
                    type: "number",
                },
                {
                    key: "detalleTipo",
                    defaultValue: [],
                    label: "Detalle tipo",
                    required: Validators.required,
                    type: "array",
                },
            ];
        } else {
            return {
                key: index,
                defaultValue: "",
                label,
                required: Validators.required,
                type,
            };
        }
    }
}
