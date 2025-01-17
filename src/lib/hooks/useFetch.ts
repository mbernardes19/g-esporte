import { useState, useEffect } from 'react'
import { apiHandler } from '../api'

type UseFetchOptions = RequestInit

export const useFetch = <T>(url: string, options: UseFetchOptions = {}) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                const result = await apiHandler(url, {
                    ...options,
                    method: 'GET',
                    signal: controller.signal
                })
                setData(result)
            } catch (err) {
                const originalError = err as Error
                if (originalError.name !== 'AbortError') {
                    setError(originalError)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

        return () => controller.abort()
    }, [url, JSON.stringify(options)])

    return { data, error, isLoading }
}
