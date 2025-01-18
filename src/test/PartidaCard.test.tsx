import { render, screen } from '@testing-library/react'
import { PartidaCard } from '@components/PartidaCard/PartidaCard'
import { PartidaStatus } from '@customTypes/api'

test('renderiza PartidaCard com placar, data, e status do jogo', async () => {
    render(
        <PartidaCard
            equipe1="São Paulo"
            equipe2="Botafogo"
            golsEquipe1={2}
            golsEquipe2={3}
            status={PartidaStatus.EM_ANDAMENTO}
            data="18/01/2025"
        />
    )

    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.getByAltText('São Paulo')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Em Andamento')).toBeInTheDocument()
    expect(screen.getByText('18/01/2025')).toBeInTheDocument()
})

test('renderiza PartidaCard somente com placar', async () => {
    render(
        <PartidaCard
            equipe1="São Paulo"
            equipe2="Botafogo"
            golsEquipe1={2}
            golsEquipe2={3}
        />
    )

    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.getByAltText('São Paulo')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
})

test('renderiza PartidaCard somente com equipes', async () => {
    render(<PartidaCard equipe1="São Paulo" equipe2="Botafogo" />)

    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.getByAltText('São Paulo')).toBeInTheDocument()
})
