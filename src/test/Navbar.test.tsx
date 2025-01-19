import { render, screen } from '@testing-library/react'
import { Navbar } from '@components/Navbar/Navbar'
import { ListaPartida } from '@customTypes/api'

const listaPartidas: ListaPartida[] = [
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

test('renderiza partidas para navegação', async () => {
    render(<Navbar items={listaPartidas} />)
    expect(screen.getByText('Botafogo x São Paulo')).toBeInTheDocument()
})
