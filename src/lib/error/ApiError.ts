type ApiErrorDetails = {
    statusCode: number
}

export class ApiError extends Error {
    statusCode: number
    constructor(message: string, details: ApiErrorDetails) {
        super(message)
        this.name = 'ApiError'
        this.statusCode = details.statusCode
    }
}
