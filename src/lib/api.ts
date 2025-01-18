import { env } from './env'
import { ApiError } from '@lib/error/ApiError'

type ApiHandlerOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
} & RequestInit

export const apiHandler = async (
    url: string,
    { method = 'GET', ...fetchOptions }: ApiHandlerOptions = {}
) => {
    if (env.debug) {
        return (await import('../test/mocks/dadosPartida.json')).default
    }
    try {
        const res = await fetch(url, fetchOptions)

        if (!res.ok) {
            const resText = await res.text()
            throw new ApiError(
                `${method} ${res.url} ${res.status} ${res.statusText} ${resText}`,
                { statusCode: res.status }
            )
        }
        return await res.json()
    } catch (err) {
        const { name, message, stack, cause } = err as Error
        console.error(`ApiError: ${method} ${url}`, {
            name,
            message,
            stack,
            cause
        })
        throw err
    }
}
