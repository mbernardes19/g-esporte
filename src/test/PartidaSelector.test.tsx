import { render, screen } from '@testing-library/react'
import { PartidaSelector } from '@components/PartidaSelector/PartidaSelector'

test('renderiza partidas com escudos de times a partir de ListaPartidas', async () => {
    const listaPartidas = [
        {
            Selected: true,
            Texto: 'Botafogo x São Paulo',
            Codigo: '20489'
        },
        {
            Selected: false,
            Texto: 'Bragantino x Criciúma',
            Codigo: '20488'
        },
        {
            Selected: false,
            Texto: 'Bahia x Atlético-GO',
            Codigo: '20487'
        }
    ]

    render(<PartidaSelector partidas={listaPartidas} />)

    expect(screen.getByAltText('Bahia')).toBeInTheDocument()
    expect(screen.getByAltText('Atlético-GO')).toBeInTheDocument()
})

test('renderiza partidas com escudos de times a partir de ListaPartidas', async () => {
    const listaPartidas = [
        {
            Selected: true,
            Texto: 'Botafogo x São Paulo',
            Codigo: '20489'
        },
        {
            Selected: false,
            Texto: 'Bragantino x Criciúma',
            Codigo: '20488'
        },
        {
            Selected: false,
            Texto: 'Bahia x Atlético-GO',
            Codigo: '20487'
        }
    ]

    render(<PartidaSelector partidas={listaPartidas} />)

    expect(screen.getByAltText('Bahia')).toBeInTheDocument()
    expect(screen.getByAltText('Atlético-GO')).toBeInTheDocument()
})
