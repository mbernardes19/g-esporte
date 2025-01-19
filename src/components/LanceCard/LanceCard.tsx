import { FC } from 'react'
import { EquipeCard } from '../EquipeCard/EquipeCard'
import { Lance } from '@customTypes/api'
import s from './LanceCard.module.scss'

export type LanceProps = {
    lance: Lance
    equipe1: string
    equipe2: string
}

export const LanceCard: FC<LanceProps> = ({ lance, equipe1, equipe2 }) => {
    const { Descricao, Total } = lance

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
                    <p>{lance[equipe1]}</p>
                </div>
                <div className={s['equipe']}>
                    <EquipeCard
                        className={s['escudo']}
                        nome={equipe2}
                        somenteEscudo
                    />
                    <p>{lance[equipe2]}</p>
                </div>
            </div>
            {Total && <div className={s['total']}>Total: {Total}</div>}
        </div>
    )
}
