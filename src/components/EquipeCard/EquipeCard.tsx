import { FC } from 'react'
import escudos from './escudos.json'
import s from './EquipeCard.module.scss'
import cn from 'classnames'

const escudosMap: Record<string, string> = escudos

export type TamanhoEquipeCard = 'xs' | 'sm' | 'md' | 'lg'

export type EquipeCardProps = {
    nome: string
    somenteEscudo?: boolean
    tamanho?: TamanhoEquipeCard
    className?: string
}

export const EquipeCard: FC<EquipeCardProps> = ({
    className,
    nome,
    somenteEscudo,
    tamanho = 'sm'
}) => {
    return (
        <div
            className={cn(s['container'], s[tamanho], {
                [className ?? '']: className
            })}
        >
            <img className={s['escudo']} src={escudosMap[nome]} alt={nome} />
            {!somenteEscudo && <p className={s['titulo']}>{nome}</p>}
        </div>
    )
}
