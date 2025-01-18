import { render, screen } from '@testing-library/react'
import { Placar } from 'src/components/Placar/Placar'

test('renderiza Placar com gols de duas equipes', async () => {
    render(<Placar golsEquipe1={2} golsEquipe2={3} />)

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
})
