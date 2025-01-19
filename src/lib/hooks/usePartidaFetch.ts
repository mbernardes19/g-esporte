import { DadosPartida } from '@customTypes/api'
import { env } from '@lib/env'
import { useFetch } from '@lib/hooks/useFetch'
import dadosPartida20488 from '../../test/mocks/dadosPartida_20488.json'
import dadosPartida20487 from '../../test/mocks/dadosPartida_20487.json'
import { useNavigation } from './useNavigation'

export const usePartidaFetch = () => {
    const { data, error, isLoading } = useFetch<DadosPartida>(env.apiEndpoint)
    const { lastSegment } = useNavigation()

    if (lastSegment === '20488') {
        return {
            partida: dadosPartida20488 as unknown as DadosPartida,
            error: null,
            isLoading: false
        }
    } else if (lastSegment === '20487') {
        return {
            partida: dadosPartida20487 as unknown as DadosPartida,
            error: null,
            isLoading: false
        }
    }

    return {
        partida: data,
        error,
        isLoading
    }
}
