import './App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent'
import { PartidaCard } from './components/PartidaCard/PartidaCard'
import { Section } from './components/Section/Section'
import { usePartidaFetch } from './lib/hooks/usePartidaFetch'
import { PartidaProvider } from '@lib/context/partidaContext'
import { SpinnerLoader } from '@components/UI/Loader/SpinnerLoader/SpinnerLoader'
import { Navbar } from '@components/Navbar/Navbar'
import { PartidaNavigator } from '@components/PartidaNavigator/PartidaNavigator'
import { LazyWrapper } from '@components/LazyWrapper/LazyWrapper'
import { lazy } from 'react'
import { GridSkeletonLoader } from '@components/UI/Loader/GridSkeletonLoader/GridSkeletonLoader'

const LazyLances = lazy(() => import('@components/Lances/Lances'))

function App() {
    const { partida, error, isLoading } = usePartidaFetch()

    if (error) {
        return <ErrorComponent error={error} />
    }

    if (isLoading || !partida) {
        return <SpinnerLoader />
    }

    return (
        <div className="App">
            <Navbar items={partida.ListaPartidas} />
            <main className="main-container">
                <PartidaProvider dados={partida}>
                    <PartidaNavigator dadosPartida={partida} />
                    <Section id={'JogosDia'} titulo="Partidas do dia">
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
                    <Section id="MediaGols" titulo="Média de gols">
                        <div>
                            <h3>Gols totais</h3>
                            <p>{partida.MediaGols.TotalGols}</p>
                            <h3>Jogos totais</h3>
                            <p>{partida.MediaGols.TotalJogos}</p>
                            <h3>Média de gols por jogo</h3>
                            <p>{partida.MediaGols.MediaPorJogo}</p>
                        </div>
                    </Section>
                    <Section id="Lances" titulo="Lances" className="centralize">
                        <LazyWrapper
                            Component={LazyLances}
                            className="w-full"
                            fallback={<GridSkeletonLoader />}
                            componentProps={{
                                lances: partida.Lances
                            }}
                        />
                    </Section>
                </PartidaProvider>
            </main>
        </div>
    )
}

export default App
