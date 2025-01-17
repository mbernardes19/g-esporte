import { renderHook } from '@testing-library/react'
import { useErrorHandler } from 'src/lib/error/hooks/useErrorHandler'
import errorsJson from '../../lib/error/errors.json'
import { ApiError } from 'src/lib/error/ApiError'

test('retorna mensagem de erro padrão para erro comum', () => {
    const error = new Error('erro comum')
    const { result } = renderHook(() => useErrorHandler(error))

    expect(result.current.errorTitle).toBe(errorsJson.default.title)
    expect(result.current.errorMessage).toBe(errorsJson.default.message)
})

test('retorna mensagem de erro baseada no status HTTP da response', () => {
    const error = new ApiError('erro de api', { statusCode: 404 })
    const { result } = renderHook(() => useErrorHandler(error))

    expect(result.current.errorTitle).toBe(errorsJson['404'].title)
    expect(result.current.errorMessage).toBe(errorsJson['404'].message)
})
