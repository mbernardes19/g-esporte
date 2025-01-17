if (!process.env.REACT_APP_API_ENDPOINT) {
    throw new Error('Variável de ambiente API_ENDPOINT vazia')
}

export const env = {
    apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
    test: process.env.REACT_APP_TEST === 'true'
}
