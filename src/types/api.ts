export type JogosDia = {
    Equipe1: string
    GolsEquipe1: number
    Equipe2: string
    GolsEquipe2: number
    Status: PartidaStatus
    Data: string
}

export type ListaPartida = {
    Selected: boolean
    Texto: string
    Codigo: string
}

export type MediaGols = {
    TotalGols: number
    TotalJogos: number
    MediaPorJogo: number
}

export type Artilharia = {
    Gols: number
    Jogador: string
    Equipe: string
}

export type PosseBola = {
    Equipe: string
    Porcentagem: string
}

export type Lance = {
    Descricao: string
    Total: number | null
} & {
    [key: string]: string | number | null
}

export type Classificacao = {
    Posicao: number
    Equipe: string
    Pontos: number
    Jogos: number
    Vitorias: number
    Empates: number
    Derrotas: number
    GolsPro: number
    GolsContra: number
    SaldoGols: number
    CartoesAmarelos: number
    CartoesVermelhos: number
    Aproveitamento: string
    Movimentacao: number | null
    MediaPontos: number
}

export type ClassificacaoGrupo = {
    NomeGrupo: string
    Classificacao: Classificacao[]
}

export type DadosPartida = {
    JogosDia: JogosDia[]
    ListaPartidas: ListaPartida[]
    PartidaAndamento: boolean
    MediaGols: MediaGols
    Artilharia: Artilharia[]
    PosseBola: PosseBola[]
    Lances: Lance[]
    ClassificacaoGrupo: ClassificacaoGrupo[]
}

export enum PartidaStatus {
    EM_ANDAMENTO = 'Em Andamento',
    FINALIZADO = 'Finalizado'
}
