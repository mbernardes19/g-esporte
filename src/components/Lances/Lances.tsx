import { FC, useMemo } from 'react'
import { Lance } from '../../types/api'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { removeSpecialChars } from '@lib/utils/removeSpecialChars'
import { LanceCard } from '../LanceCard/LanceCard'
import s from './Lances.module.scss'

export type LancesProps = {
    lances: Lance[]
}

export const Lances: FC<LancesProps> = ({ lances }) => {
    const { equipe1, equipe2 } = usePartidaAtual()

    const normalizedEquipe1 = useMemo(
        () => removeSpecialChars(equipe1),
        [equipe1]
    )
    const normalizedEquipe2 = useMemo(
        () => removeSpecialChars(equipe2),
        [equipe2]
    )
    return (
        <div className={s['container']}>
            {lances.map((lance, idx) => (
                <LanceCard
                    key={idx}
                    equipe1={normalizedEquipe1}
                    equipe2={normalizedEquipe2}
                    lance={lance}
                />
            ))}
        </div>
    )
}
