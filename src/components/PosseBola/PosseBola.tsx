import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { FC, PropsWithChildren } from 'react'

export const PosseBola: FC<PropsWithChildren> = () => {
    const { PosseBola } = usePartidaAtual()

    return (
        <div className="flex gap-4">
            {PosseBola.map((posseBola, idx) => (
                <div key={idx}>
                    <h3 className="font-bold">{posseBola.Equipe}</h3>
                    <p>{posseBola.Porcentagem}</p>
                </div>
            ))}
        </div>
    )
}
