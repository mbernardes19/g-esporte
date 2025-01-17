import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import { useErrorHandler } from 'src/lib/error/hooks/useErrorHandler'

type ErrorComponentProps = {
    error: Error
}

export const ErrorBoundaryComponent: FC<FallbackProps> = ({ error }) => {
    return <ErrorComponent error={error} />
}

export const ErrorComponent: FC<ErrorComponentProps> = ({ error }) => {
    const { errorMessage, errorTitle } = useErrorHandler(error)

    return (
        <div>
            <h1>{errorTitle}</h1>
            <p>{errorMessage}</p>
        </div>
    )
}
