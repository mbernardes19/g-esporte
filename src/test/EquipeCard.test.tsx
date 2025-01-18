import { render, screen } from '@testing-library/react'
import { EquipeCard } from 'src/components/EquipeCard/EquipeCard'

test('renderiza EquipeCard com escudo e nome da equipe', async () => {
    render(<EquipeCard nome="Botafogo" />)
    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.getByText('Botafogo')).toBeInTheDocument()
})

test('renderiza EquipeCard somente com escudo', async () => {
    render(<EquipeCard nome="Botafogo" somenteEscudo />)
    expect(screen.getByAltText('Botafogo')).toBeInTheDocument()
    expect(screen.queryByText('Botafogo')).not.toBeInTheDocument()
})
