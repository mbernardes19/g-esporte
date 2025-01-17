import { DadosPartida } from 'src/types/api'
import { env } from './env'

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
