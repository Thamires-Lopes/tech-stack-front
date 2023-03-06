import { ConhecimentoDto } from "./conhecimento.dto";

export class TechStackInfoDto {
    id?: number;
    nome?: string;
    quantidade?: number;
    area?: string;
    detalhes?: string;
    responsaveis?: string;
    dataCriacao?: Date;
    dataCriacaoFormatada?: string;
    conhecimentos?: ConhecimentoDto[]
}