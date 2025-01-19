import { render, screen } from '@testing-library/react'
import App from '../App'
import { act } from 'react'

test('renderiza partidas do dia', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Partidas do dia')[1]).toBeInTheDocument()
})
