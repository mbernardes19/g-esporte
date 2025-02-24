import { fireEvent, render, screen } from '@testing-library/react'
import { PartidaNavigator } from '@components/PartidaNavigator/PartidaNavigator'
import { DadosPartida, PartidaStatus } from '@customTypes/api'
import { act } from 'react'
import App from '../App'

const mockedPartida: DadosPartida = {
    JogosDia: [
        {
            Equipe1: 'Botafogo',
            GolsEquipe1: 2,
            Equipe2: 'São Paulo',
            GolsEquipe2: 1,
            Status: PartidaStatus.FINALIZADO,
            Data: '08/12/2024'
        },
        {
            Equipe1: 'Bragantino',
            GolsEquipe1: 5,
            Equipe2: 'Criciúma',
            GolsEquipe2: 1,
            Status: PartidaStatus.FINALIZADO,
            Data: '08/12/2024'
        }
    ],
    ListaPartidas: [
        {
            Selected: true,
            Texto: 'Botafogo x São Paulo',
            Codigo: '20489'
        },
        {
            Selected: false,
            Texto: 'Bragantino x Criciúma',
            Codigo: '20488'
        },
        {
            Selected: false,
            Texto: 'Bahia x Atlético-GO',
            Codigo: '20487'
        }
    ],
    PartidaAndamento: false,
    MediaGols: {
        TotalGols: 929,
        TotalJogos: 380,
        MediaPorJogo: 2.44
    },
    Artilharia: [
        {
            Gols: 15,
            Jogador: 'Alerrandro',
            Equipe: 'Vitória'
        },
        {
            Gols: 15,
            Jogador: 'Yuri Alberto',
            Equipe: 'Corinthians'
        },
        {
            Gols: 13,
            Jogador: 'Estêvão',
            Equipe: 'Palmeiras'
        }
    ],
    PosseBola: [
        {
            Equipe: 'Botafogo',
            Porcentagem: '42%'
        },
        {
            Equipe: 'São Paulo',
            Porcentagem: '58%'
        }
    ],
    Lances: [
        {
            Descricao: 'Gols',
            Botafogo: 2,
            SaoPaulo: 1,
            Total: 3
        },
        {
            Descricao: 'Finalizações',
            Botafogo: 17,
            SaoPaulo: 5,
            Total: 22
        },
        {
            Descricao: 'Finalizações no Alvo',
            Botafogo: 8,
            SaoPaulo: 1,
            Total: 9
        },
        {
            Descricao: 'Finalizações fora',
            Botafogo: 7,
            SaoPaulo: 2,
            Total: 9
        },
        {
            Descricao: 'Finalizações defendidas',
            Botafogo: 6,
            SaoPaulo: 0,
            Total: 6
        },
        {
            Descricao: 'Finalizações na trave',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        },
        {
            Descricao: 'Finalizações bloqueadas',
            Botafogo: 2,
            SaoPaulo: 2,
            Total: 4
        },
        {
            Descricao: 'Cabeçadas a gol',
            Botafogo: 4,
            SaoPaulo: 0,
            Total: 4
        },
        {
            Descricao: 'Chutes a gol',
            Botafogo: 13,
            SaoPaulo: 5,
            Total: 18
        },
        {
            Descricao: 'Assistência para Finalização',
            Botafogo: 4,
            SaoPaulo: 1,
            Total: 5
        },
        {
            Descricao: 'Cobranças de Falta',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        },
        {
            Descricao: 'Gols contra',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        },
        {
            Descricao: 'Escanteios',
            Botafogo: 3,
            SaoPaulo: 0,
            Total: 3
        },
        {
            Descricao: 'Faltas cometidas',
            Botafogo: 8,
            SaoPaulo: 3,
            Total: 11
        },
        {
            Descricao: 'Faltas recebidas',
            Botafogo: 3,
            SaoPaulo: 8,
            Total: 11
        },
        {
            Descricao: 'Impedimentos',
            Botafogo: 1,
            SaoPaulo: 0,
            Total: 1
        },
        {
            Descricao: 'Precisão dos Passes',
            Botafogo: '92%',
            SaoPaulo: '89%',
            Total: null
        },
        {
            Descricao: 'Passes',
            Botafogo: 516,
            SaoPaulo: 596,
            Total: 1112
        },
        {
            Descricao: 'Passes completos',
            Botafogo: 478,
            SaoPaulo: 534,
            Total: 1012
        },
        {
            Descricao: 'Passes incompletos',
            Botafogo: 37,
            SaoPaulo: 62,
            Total: 99
        },
        {
            Descricao: 'Passes decisivos',
            Botafogo: 1,
            SaoPaulo: 0,
            Total: 1
        },
        {
            Descricao: 'Desarmes',
            Botafogo: 15,
            SaoPaulo: 19,
            Total: 34
        },
        {
            Descricao: 'Desarmes incompletos',
            Botafogo: 2,
            SaoPaulo: 3,
            Total: 5
        },
        {
            Descricao: 'Dribles',
            Botafogo: 7,
            SaoPaulo: 2,
            Total: 9
        },
        {
            Descricao: 'Dribles Certos',
            Botafogo: 5,
            SaoPaulo: 0,
            Total: 5
        },
        {
            Descricao: 'Dribles Errados',
            Botafogo: 2,
            SaoPaulo: 2,
            Total: 4
        },
        {
            Descricao: 'Defesas normais',
            Botafogo: 1,
            SaoPaulo: 4,
            Total: 5
        },
        {
            Descricao: 'Defesas difíceis',
            Botafogo: 0,
            SaoPaulo: 3,
            Total: 3
        },
        {
            Descricao: 'Defesas de pênalti',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        },
        {
            Descricao: 'Cartões amarelos',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        },
        {
            Descricao: 'Cartões vermelhos',
            Botafogo: 0,
            SaoPaulo: 0,
            Total: 0
        }
    ],
    ClassificacaoGrupo: [
        {
            NomeGrupo: 'Grupo 1',
            Classificacao: [
                {
                    Posicao: 1,
                    Equipe: 'Botafogo',
                    Pontos: 79,
                    Jogos: 38,
                    Vitorias: 23,
                    Empates: 10,
                    Derrotas: 5,
                    GolsPro: 59,
                    GolsContra: 29,
                    SaldoGols: 30,
                    CartoesAmarelos: 7,
                    CartoesVermelhos: 0,
                    Aproveitamento: '69.3%',
                    Movimentacao: null,
                    MediaPontos: 79
                },
                {
                    Posicao: 2,
                    Equipe: 'Palmeiras',
                    Pontos: 73,
                    Jogos: 38,
                    Vitorias: 22,
                    Empates: 7,
                    Derrotas: 9,
                    GolsPro: 60,
                    GolsContra: 33,
                    SaldoGols: 27,
                    CartoesAmarelos: 8,
                    CartoesVermelhos: 0,
                    Aproveitamento: '64.0%',
                    Movimentacao: null,
                    MediaPontos: 73
                },
                {
                    Posicao: 3,
                    Equipe: 'Flamengo',
                    Pontos: 70,
                    Jogos: 38,
                    Vitorias: 20,
                    Empates: 10,
                    Derrotas: 8,
                    GolsPro: 61,
                    GolsContra: 42,
                    SaldoGols: 19,
                    CartoesAmarelos: 4,
                    CartoesVermelhos: 0,
                    Aproveitamento: '61.4%',
                    Movimentacao: null,
                    MediaPontos: 70
                },
                {
                    Posicao: 4,
                    Equipe: 'Fortaleza',
                    Pontos: 68,
                    Jogos: 38,
                    Vitorias: 19,
                    Empates: 11,
                    Derrotas: 8,
                    GolsPro: 53,
                    GolsContra: 39,
                    SaldoGols: 14,
                    CartoesAmarelos: 10,
                    CartoesVermelhos: 0,
                    Aproveitamento: '59.6%',
                    Movimentacao: '+1',
                    MediaPontos: 68
                },
                {
                    Posicao: 5,
                    Equipe: 'Internacional',
                    Pontos: 65,
                    Jogos: 38,
                    Vitorias: 18,
                    Empates: 11,
                    Derrotas: 9,
                    GolsPro: 53,
                    GolsContra: 36,
                    SaldoGols: 17,
                    CartoesAmarelos: 5,
                    CartoesVermelhos: 0,
                    Aproveitamento: '57.0%',
                    Movimentacao: '-1',
                    MediaPontos: 65
                },
                {
                    Posicao: 6,
                    Equipe: 'São Paulo',
                    Pontos: 59,
                    Jogos: 38,
                    Vitorias: 17,
                    Empates: 8,
                    Derrotas: 13,
                    GolsPro: 53,
                    GolsContra: 43,
                    SaldoGols: 10,
                    CartoesAmarelos: 112,
                    CartoesVermelhos: 9,
                    Aproveitamento: '51,8%',
                    Movimentacao: null,
                    MediaPontos: 59
                },
                {
                    Posicao: 7,
                    Equipe: 'Corinthians',
                    Pontos: 56,
                    Jogos: 38,
                    Vitorias: 15,
                    Empates: 11,
                    Derrotas: 12,
                    GolsPro: 54,
                    GolsContra: 45,
                    SaldoGols: 9,
                    CartoesAmarelos: 117,
                    CartoesVermelhos: 10,
                    Aproveitamento: '49,1%',
                    Movimentacao: null,
                    MediaPontos: 56
                },
                {
                    Posicao: 8,
                    Equipe: 'Bahia',
                    Pontos: 53,
                    Jogos: 38,
                    Vitorias: 15,
                    Empates: 8,
                    Derrotas: 15,
                    GolsPro: 49,
                    GolsContra: 49,
                    SaldoGols: 0,
                    CartoesAmarelos: 85,
                    CartoesVermelhos: 1,
                    Aproveitamento: '46,5%',
                    Movimentacao: null,
                    MediaPontos: 53
                },
                {
                    Posicao: 9,
                    Equipe: 'Cruzeiro',
                    Pontos: 52,
                    Jogos: 38,
                    Vitorias: 14,
                    Empates: 10,
                    Derrotas: 14,
                    GolsPro: 43,
                    GolsContra: 41,
                    SaldoGols: 2,
                    CartoesAmarelos: 101,
                    CartoesVermelhos: 8,
                    Aproveitamento: '45,6%',
                    Movimentacao: null,
                    MediaPontos: 52
                },
                {
                    Posicao: 10,
                    Equipe: 'Vasco',
                    Pontos: 50,
                    Jogos: 38,
                    Vitorias: 14,
                    Empates: 8,
                    Derrotas: 16,
                    GolsPro: 43,
                    GolsContra: 56,
                    SaldoGols: -13,
                    CartoesAmarelos: 94,
                    CartoesVermelhos: 7,
                    Aproveitamento: '43,9%',
                    Movimentacao: null,
                    MediaPontos: 50
                },
                {
                    Posicao: 11,
                    Equipe: 'Vitória',
                    Pontos: 47,
                    Jogos: 38,
                    Vitorias: 13,
                    Empates: 8,
                    Derrotas: 17,
                    GolsPro: 45,
                    GolsContra: 52,
                    SaldoGols: -7,
                    CartoesAmarelos: 112,
                    CartoesVermelhos: 7,
                    Aproveitamento: '41,2%',
                    Movimentacao: null,
                    MediaPontos: 47
                },
                {
                    Posicao: 12,
                    Equipe: 'Atlético-MG',
                    Pontos: 47,
                    Jogos: 38,
                    Vitorias: 11,
                    Empates: 14,
                    Derrotas: 13,
                    GolsPro: 47,
                    GolsContra: 54,
                    SaldoGols: -7,
                    CartoesAmarelos: 107,
                    CartoesVermelhos: 13,
                    Aproveitamento: '41,2%',
                    Movimentacao: null,
                    MediaPontos: 47
                },
                {
                    Posicao: 13,
                    Equipe: 'Fluminense',
                    Pontos: 46,
                    Jogos: 38,
                    Vitorias: 12,
                    Empates: 10,
                    Derrotas: 16,
                    GolsPro: 33,
                    GolsContra: 39,
                    SaldoGols: -6,
                    CartoesAmarelos: 119,
                    CartoesVermelhos: 13,
                    Aproveitamento: '40,4%',
                    Movimentacao: null,
                    MediaPontos: 46
                },
                {
                    Posicao: 14,
                    Equipe: 'Grêmio',
                    Pontos: 45,
                    Jogos: 38,
                    Vitorias: 12,
                    Empates: 9,
                    Derrotas: 17,
                    GolsPro: 44,
                    GolsContra: 50,
                    SaldoGols: -6,
                    CartoesAmarelos: 93,
                    CartoesVermelhos: 8,
                    Aproveitamento: '39,5%',
                    Movimentacao: null,
                    MediaPontos: 45
                },
                {
                    Posicao: 15,
                    Equipe: 'Juventude',
                    Pontos: 45,
                    Jogos: 38,
                    Vitorias: 11,
                    Empates: 12,
                    Derrotas: 15,
                    GolsPro: 48,
                    GolsContra: 59,
                    SaldoGols: -11,
                    CartoesAmarelos: 106,
                    CartoesVermelhos: 13,
                    Aproveitamento: '39,5%',
                    Movimentacao: null,
                    MediaPontos: 45
                },
                {
                    Posicao: 16,
                    Equipe: 'Bragantino',
                    Pontos: 44,
                    Jogos: 38,
                    Vitorias: 10,
                    Empates: 14,
                    Derrotas: 14,
                    GolsPro: 44,
                    GolsContra: 48,
                    SaldoGols: -4,
                    CartoesAmarelos: 108,
                    CartoesVermelhos: 5,
                    Aproveitamento: '38,6%',
                    Movimentacao: null,
                    MediaPontos: 44
                },
                {
                    Posicao: 17,
                    Equipe: 'Athletico-PR',
                    Pontos: 42,
                    Jogos: 38,
                    Vitorias: 11,
                    Empates: 9,
                    Derrotas: 18,
                    GolsPro: 40,
                    GolsContra: 46,
                    SaldoGols: -6,
                    CartoesAmarelos: 98,
                    CartoesVermelhos: 10,
                    Aproveitamento: '36,8%',
                    Movimentacao: null,
                    MediaPontos: 42
                },
                {
                    Posicao: 18,
                    Equipe: 'Criciúma',
                    Pontos: 38,
                    Jogos: 38,
                    Vitorias: 9,
                    Empates: 11,
                    Derrotas: 18,
                    GolsPro: 42,
                    GolsContra: 61,
                    SaldoGols: -19,
                    CartoesAmarelos: 97,
                    CartoesVermelhos: 6,
                    Aproveitamento: '33,3%',
                    Movimentacao: null,
                    MediaPontos: 38
                },
                {
                    Posicao: 19,
                    Equipe: 'Atlético-GO',
                    Pontos: 30,
                    Jogos: 38,
                    Vitorias: 7,
                    Empates: 9,
                    Derrotas: 22,
                    GolsPro: 29,
                    GolsContra: 58,
                    SaldoGols: -29,
                    CartoesAmarelos: 104,
                    CartoesVermelhos: 12,
                    Aproveitamento: '26,3%',
                    Movimentacao: null,
                    MediaPontos: 30
                },
                {
                    Posicao: 20,
                    Equipe: 'Cuiabá',
                    Pontos: 30,
                    Jogos: 38,
                    Vitorias: 6,
                    Empates: 12,
                    Derrotas: 20,
                    GolsPro: 29,
                    GolsContra: 49,
                    SaldoGols: -20,
                    CartoesAmarelos: 119,
                    CartoesVermelhos: 2,
                    Aproveitamento: '26,3%',
                    Movimentacao: null,
                    MediaPontos: 30
                }
            ]
        }
    ]
}

const scrollIntoViewMock = jest.fn()

beforeEach(() => {
    Element.prototype.scrollIntoView = scrollIntoViewMock
})

test('renderiza links baseado nas chaves de primeiro nível da resposta de dadosPartida', async () => {
    render(<PartidaNavigator dadosPartida={mockedPartida} />)
    expect(screen.getByText('Partidas do dia')).toBeInTheDocument()
})

test('leva usuário à seção correspondente ao id do link de navegação', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    const lancesLink = screen.getAllByText('Lances')[0]
    fireEvent.click(lancesLink)
    expect(scrollIntoViewMock).toHaveBeenCalled()
})
