import { FC } from 'react'
import { Lance } from '../../types/api'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { LanceCard } from '../LanceCard/LanceCard'
import s from './Lances.module.scss'

export type LancesProps = {
    lances: Lance[]
}

export const Lances: FC<LancesProps> = ({ lances }) => {
    const { equipe1, equipe2 } = usePartidaAtual()

    return (
        <div className={s['container']}>
            {lances.map((lance, idx) => (
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
