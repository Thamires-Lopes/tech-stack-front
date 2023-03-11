export enum TipoRelevancia {
    Baixa = 1,
    Normal,
    Alta
};

export const TiposRelevanciaList : {value: number, label: string}[]  = [
    {
        value: TipoRelevancia.Baixa,
        label: "Baixa"
    },
    {
        value: TipoRelevancia.Normal,
        label: "Normal"
    },
    {
        value: TipoRelevancia.Alta,
        label: "Alta"
    }
];

export const TiposRelevanciaNamesList : string[] = [
    "Baixa",
    "Normal",
    "Alta"
]