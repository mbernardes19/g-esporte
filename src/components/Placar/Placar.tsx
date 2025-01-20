import { FC } from 'react'
import s from './Placar.module.scss'
import cn from 'classnames'

export type PlacarProps = {
    className?: string
    golsEquipe1: number
    golsEquipe2: number
}

export const Placar: FC<PlacarProps> = ({
    className,
    golsEquipe1,
    golsEquipe2
}) => {
    return (
        <div
            className={cn(s['container'], {
                [className ?? '']: className
            })}
        >
            <p>{golsEquipe1}</p>
            <span aria-hidden="true">x</span>
            <p>{golsEquipe2}</p>
        </div>
    )
}
