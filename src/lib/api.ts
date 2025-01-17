import { env } from './env'

export type DadosPartida = {
    JogosDia: {
        Equipe1: string
        GolsEquipe1: number
        Equipe2: string
        GolsEquipe2: number
        Status: string
        Data: string
    }[]
    ListaPartidas: {
        Selected: boolean
        Texto: string
        Codigo: string
    }[]
    PartidaAndamento: boolean
    MediaGols: {
        TotalGols: number
        TotalJogos: number
        MediaPorJogo: number
    }
    Artilharia: {
        Gols: number
        Jogador: string
        Equipe: string
    }[]
    PosseBola: {
        Equipe: string
        Porcentagem: string
    }[]
    Lances: {
        Descricao: string
        Total: number
    } & {
        [key: string]: string | number
    }[]
    ClassificacaoGrupo: {
        NomeGrupo: string
        Classificacao: {
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
            Movimentacao: number
            MediaPontos: number
        }[]
    }[]
}

type ApiHandlerOptions = {
    url: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export const apiHandler = async ({
    url,
    method = 'GET'
}: ApiHandlerOptions) => {
    if (env.test) {
        return (await import('../test/mocks/dadosPartida.json')).default
    }
    try {
        const res = await fetch(url, { method })
        if (!res.ok) {
            throw new Error(
                `[API] Erro ao chamar endpoint: ${method} ${url}: ${res.status} ${res.statusText} ${res.body}`
            )
        }
        return await res.json()
    } catch (err) {
        throw new Error(
            `[API] Erro ao chamar endpoint: ${method} ${url}: ${err}`
        )
    }
}

export const fetchPartida = async (): Promise<DadosPartida> => {
    return await apiHandler({ url: env.apiEndpoint })
}
