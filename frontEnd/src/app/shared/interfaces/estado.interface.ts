export interface Estado{
    id : number;
    nome: string;
    sigla: string;
    regiao: Regiao;
}

export interface Regiao{
    id : number;
    nome: string;
    sigla: string;
}