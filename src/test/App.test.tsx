import { render, screen } from '@testing-library/react'
import App from '../App'
import { act } from 'react'

test('renderiza Partidas do dia', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Partidas do dia')[1]).toBeInTheDocument()
})

test('renderiza Média de gols', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Média de gols')[1]).toBeInTheDocument()
})

test('renderiza Artilharia', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Artilharia')[1]).toBeInTheDocument()
})

test('renderiza Posse de bola', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Posse de bola')[1]).toBeInTheDocument()
})

test('renderiza Lances', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Lances')[1]).toBeInTheDocument()
})

test('renderiza tabela de Classificação', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getAllByText('Classificação')[1]).toBeInTheDocument()
})

test('renderiza barra de navegação', async () => {
    render(<App />)

    await act(async () => {
        await Promise.resolve()
    })

    expect(screen.getByText('Botafogo x São Paulo')).toBeInTheDocument()
})
