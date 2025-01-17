import { DadosPartida } from '../../types/api'
import { env } from '../env'
import { useFetch } from './useFetch'

export const usePartidaFetch = () => {
    const { data, error, isLoading } = useFetch<DadosPartida>(env.apiEndpoint)

    return {
        partida: data,
        error,
        isLoading
    }
}
