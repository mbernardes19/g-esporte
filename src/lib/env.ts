import dotenv from 'dotenv'
dotenv.config()

if (!process.env.API_ENDPOINT) {
    throw new Error('Variável de ambiente API_ENDPOINT vazia')
}

export const env = {
    apiEndpoint: process.env.API_ENDPOINT
}
