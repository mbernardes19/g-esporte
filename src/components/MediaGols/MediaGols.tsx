import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { FC, PropsWithChildren } from 'react'

export const MediaGols: FC<PropsWithChildren> = () => {
    const {
        MediaGols: { TotalGols, TotalJogos, MediaPorJogo }
    } = usePartidaAtual()

    return (
        <div>
            <h3>Gols totais</h3>
            <p>{TotalGols}</p>
            <h3>Jogos totais</h3>
            <p>{TotalJogos}</p>
            <h3>Média de gols por jogo</h3>
            <p>{MediaPorJogo}</p>
        </div>
    )
}
