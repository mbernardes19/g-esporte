import { FC, useMemo } from 'react'
import { EquipeCard } from '../EquipeCard/EquipeCard'
import { Lance } from '@customTypes/api'
import s from './LanceCard.module.scss'
import { removeSpecialChars } from '@lib/utils/removeSpecialChars'

export type LanceProps = {
    lance: Lance
    equipe1: string
    equipe2: string
}

export const LanceCard: FC<LanceProps> = ({ lance, equipe1, equipe2 }) => {
    const { Descricao, Total } = lance

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
            <h3>{Descricao}</h3>
            <div className={s['lance-group']}>
                <div className={s['equipe']}>
                    <EquipeCard
                        className={s['escudo']}
                        nome={equipe1}
                        somenteEscudo
                    />
                    <p>{lance[normalizedEquipe1]}</p>
                </div>
                <div className={s['equipe']}>
                    <EquipeCard
                        className={s['escudo']}
                        nome={equipe2}
                        somenteEscudo
                    />
                    <p>{lance[normalizedEquipe2]}</p>
                </div>
            </div>
            {Total && <div className={s['total']}>Total: {Total}</div>}
        </div>
    )
}
