import { DadosPartida } from '@customTypes/api'
import { env } from '@lib/env'
import { useFetch } from '@lib/hooks/useFetch'

export const usePartidaFetch = () => {
    const { data, error, isLoading } = useFetch<DadosPartida>(env.apiEndpoint)

    return {
        partida: data,
        error,
        isLoading
    }
}
