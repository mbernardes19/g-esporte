import { FC } from 'react'
import s from './Placar.module.scss'
import cn from 'classnames'

export type PlacarProps = {
    golsEquipe1: number
    golsEquipe2: number
}

export const Placar: FC<PlacarProps> = ({ golsEquipe1, golsEquipe2 }) => {
    return (
        <div className={cn(s['container'])}>
            <p>{golsEquipe1}</p>
            <span aria-hidden="true">x</span>
            <p>{golsEquipe2}</p>
        </div>
    )
}
