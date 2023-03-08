export enum TipoRelevancia {
    Baixa = 1,
    Normal,
    Alta
};

export const TiposRelevanciaList : {key: number, description: string}[]  = [
    {
        key: TipoRelevancia.Baixa,
        description: "Baixa"
    },
    {
        key: TipoRelevancia.Normal,
        description: "Normal"
    },
    {
        key: TipoRelevancia.Alta,
        description: "Alta"
    }
];

export const TiposRelevanciaNamesList : string[] = [
    "Baixa",
    "Normal",
    "Alta"
]