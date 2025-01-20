import { FC, PropsWithChildren } from 'react'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { LanceCard } from '../LanceCard/LanceCard'
import s from './Lances.module.scss'

export const Lances: FC<PropsWithChildren> = () => {
    const { equipe1, equipe2, Lances } = usePartidaAtual()

    return (
        <div className={s['container']}>
            {Lances.map((lance, idx) => (
                <LanceCard
                    key={idx}
                    equipe1={equipe1}
                    equipe2={equipe2}
                    lance={lance}
                />
            ))}
        </div>
    )
}

export default Lances
