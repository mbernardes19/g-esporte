import { render, screen } from '@testing-library/react'
import { Section } from '@components/Section/Section'

test('renderiza Section com conteúdo e título', async () => {
    render(
        <Section titulo="Seção teste">
            <div>
                <p>Conteúdo da seção</p>
            </div>
        </Section>
    )

    expect(screen.getByText('Seção teste')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo da seção')).toBeInTheDocument()
})
