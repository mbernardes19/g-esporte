import { FC, PropsWithChildren } from 'react'
import { usePartidaAtual } from '../../lib/hooks/usePartidaAtual'
import { PartidaCard } from '@components/PartidaCard/PartidaCard'

export const PartidasDia: FC<PropsWithChildren> = () => {
    const { JogosDia } = usePartidaAtual()

    return (
        <>
            {JogosDia.map(
                (
                    { Equipe1, Equipe2, GolsEquipe1, GolsEquipe2, Status },
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
        </>
    )
}
