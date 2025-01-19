import { DadosPartida } from '@customTypes/api'
import { removeSpecialChars } from './removeSpecialChars'

export const getGolsFromLances = (
    dadosPartida: DadosPartida,
    nomeEquipe: string
) => {
    const normalizedEquipe = removeSpecialChars(nomeEquipe)
    return dadosPartida?.Lances.find((lance) => lance.Descricao === 'Gols')?.[
        normalizedEquipe
    ]
}
