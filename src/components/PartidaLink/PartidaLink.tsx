import { FC } from 'react'
import cn from 'classnames'
import s from './PartidaLink.module.scss'

export type PartidaLinkProps = {
    className?: string
    texto: string
    codigo: string
    isSelected: boolean
}

export const PartidaLink: FC<PartidaLinkProps> = ({
    className,
    texto,
    codigo,
    isSelected
}) => {
    return (
        <a
            className={cn(
                s['link'],
                {
                    [s['selected']]: isSelected
                },
                className
            )}
            href={`/${codigo}`}
        >
            {texto}
        </a>
    )
}
