import { AssuntoDto } from "./assunto.dto";

export class ConhecimentoDto {
    id?: number;
    nome?: string;
    idTipoConhecimento?: number;
    assuntos?: AssuntoDto[];
}