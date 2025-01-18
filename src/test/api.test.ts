import { apiHandler } from '@lib/api'
import { ApiError } from '@lib/error/ApiError'

jest.mock('@lib/env', () => ({
    env: {
        apiEndpoint: '/test-api-endpoint',
        debug: false
    }
}))

beforeEach(() => {
    global.fetch = jest.fn()
})

afterEach(() => {
    jest.resetAllMocks()
})

test('faz chamada de API bem sucedida usando fetch', async () => {
    const mockData = { test: 'test value' }
    const mockedFetch = global.fetch as jest.Mock
    mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
    })

    await apiHandler('/url-teste')

    expect(mockedFetch).toHaveBeenCalledWith('/url-teste', {})
})

test('lança erro de API quando status da response é mais de 299', async () => {
    const mockData = { test: 'test value' }
    const mockedFetch = global.fetch as jest.Mock
    mockedFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        url: '/url-teste',
        text: async () => JSON.stringify(mockData)
    })

    await expect(apiHandler('/url-teste')).rejects.toThrow(ApiError)

    expect(mockedFetch).toHaveBeenCalledWith('/url-teste', {})
})
