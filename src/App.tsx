import './App.css'
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent'
import { usePartidaFetch } from './lib/hooks/usePartidaFetch'

function App() {
    const { partida, error, isLoading } = usePartidaFetch()

    if (error) {
        return <ErrorComponent error={error} />
    }

    return (
        <div className="App">
            <main>
                {isLoading && <div>Loading...</div>}
                {!isLoading && <p>{partida?.Artilharia[0].Jogador}</p>}
            </main>
        </div>
    )
}

export default App
