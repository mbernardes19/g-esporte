import { ApiError } from '../ApiError'
import errorsJson from '../errors.json'

export type ErrorInfo = {
    title: string
    message: string
}

export const isApiError = (error: Error) => error.name === 'ApiError'

export const useErrorHandler = (error: Error) => {
    const errorsMap = errorsJson as unknown as Record<string, ErrorInfo>

    if (!isApiError(error)) {
        return {
            errorTitle: errorsMap.default.title,
            errorMessage: errorsMap.default.message
        }
    }

    return {
        errorTitle: errorsMap[(error as ApiError).statusCode.toString()].title,
        errorMessage:
            errorsMap[(error as ApiError).statusCode.toString()].message
    }
}
