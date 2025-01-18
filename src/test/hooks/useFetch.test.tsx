import { renderHook } from '@testing-library/react'
import { useFetch } from '@lib/hooks/useFetch'
import { apiHandler } from '@lib/api'
import { act } from 'react'
import { ApiError } from '@lib/error/ApiError'

jest.mock('@lib/api', () => ({
    apiHandler: jest.fn()
}))

beforeEach(() => {
    jest.clearAllMocks()
})

test('utiliza apiHandler para retornar resultado de chamada de API', async () => {
    const mockData = { test: 'test value' }
    const apiHandlerMock = apiHandler as jest.Mock
    apiHandlerMock.mockResolvedValue(mockData)

    const { result } = renderHook(() => useFetch('/url-teste'))

    await act(async () => {
        await Promise.resolve()
    })

    expect(result.current.data).toMatchObject({ test: 'test value' })
})

test('isLoading reflete estado da chamada de API', async () => {
    const mockData = { test: 'test value' }
    const apiHandlerMock = apiHandler as jest.Mock
    apiHandlerMock.mockResolvedValue(mockData)

    const { result } = renderHook(() => useFetch('/url-teste'))

    expect(result.current.isLoading).toBe(true)

    await act(async () => {
        await Promise.resolve()
    })

    expect(result.current.isLoading).toBe(false)
})

test('Erro em chamada de API é tratado e passado no retorno do hook', async () => {
    const apiHandlerMock = apiHandler as jest.Mock
    apiHandlerMock.mockImplementation(() => {
        throw new ApiError('Api call failed', { statusCode: 500 })
    })

    const { result } = renderHook(() => useFetch('/url-teste'))

    await act(async () => {
        await Promise.resolve()
    })

    expect(result.current.error).toBeTruthy()
    expect(result.current.isLoading).toBe(false)
})
