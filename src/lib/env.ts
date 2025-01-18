if (!import.meta.env.VITE_API_ENDPOINT) {
    throw new Error('Variável de ambiente API_ENDPOINT vazia')
}

export const env = {
    apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
    debug: import.meta.env.VITE_DEBUG === 'true'
}
