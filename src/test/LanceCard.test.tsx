import { render, screen } from '@testing-library/react'
import { LanceCard } from '@components/LanceCard/LanceCard'

const lance = {
    Descricao: 'Finalizações',
    Botafogo: 17,
    SaoPaulo: 5,
    Total: 22
}

const lanceSemTotal = {
    Descricao: 'Finalizações',
    Botafogo: 17,
    SaoPaulo: 5,
    Total: null
}

test('renderiza lance com imagens dos times', async () => {
    render(<LanceCard lance={lance} equipe1="Botafogo" equipe2="SaoPaulo" />)

    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.getByAltText('SaoPaulo')).toBeInTheDocument()
})

test('renderiza lance com números de cada time', async () => {
    render(<LanceCard lance={lance} equipe1="Botafogo" equipe2="SaoPaulo" />)

    expect(screen.getByText('17')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
})

test('renderiza lance com número total', async () => {
    render(<LanceCard lance={lance} equipe1="Botafogo" equipe2="SaoPaulo" />)

    expect(screen.getByText('Total: 22')).toBeInTheDocument()
})

test('renderiza lance sem número total', async () => {
    render(
        <LanceCard
            lance={lanceSemTotal}
            equipe1="Botafogo"
            equipe2="SaoPaulo"
        />
    )

    expect(screen.queryByText('Total')).not.toBeInTheDocument()
})
