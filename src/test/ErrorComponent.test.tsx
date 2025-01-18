import { render, screen } from '@testing-library/react'
import { ErrorComponent } from '@components/ErrorComponent/ErrorComponent'
import { ApiError } from '@lib/error/ApiError'
import errorsJson from '@lib/error/errors.json'

test('renderiza uma mensagem de erro genérico', () => {
    render(<ErrorComponent error={new Error('new error')} />)
    expect(screen.getByText(errorsJson.default.title)).toBeVisible()
})

test('renderiza uma mensagem de erro específica de API', () => {
    render(
        <ErrorComponent
            error={new ApiError('new api error', { statusCode: 404 })}
        />
    )
    expect(screen.getByText(errorsJson['404'].title)).toBeVisible()
})
