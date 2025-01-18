import { PartidaSelector } from '@components/PartidaSelector/PartidaSelector'
import './App.css'
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent'
import { PartidaCard } from './components/PartidaCard/PartidaCard'
import { Section } from './components/Section/Section'
import { usePartidaFetch } from './lib/hooks/usePartidaFetch'

function App() {
    const { partida, error, isLoading } = usePartidaFetch()

    if (error) {
        return <ErrorComponent error={error} />
    }

    if (isLoading || !partida) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <main className="main-container">
                <Section titulo="Partidas do dia">
                    {partida?.JogosDia.map(
                        (
                            {
                                Equipe1,
                                Equipe2,
                                GolsEquipe1,
                                GolsEquipe2,
                                Status
                            },
                            idx
                        ) => (
                            <PartidaCard
                                key={idx}
                                equipe1={Equipe1}
                                equipe2={Equipe2}
                                golsEquipe1={GolsEquipe1}
                                golsEquipe2={GolsEquipe2}
                                status={Status}
                            />
                        )
                    )}
                </Section>
                <Section titulo="Partidas recentes">
                    <PartidaSelector partidas={partida.ListaPartidas} />
                </Section>
            </main>
        </div>
    )
}

export default App
