import { FC } from 'react'
import escudos from './escudos.json'
import s from './EquipeCard.module.scss'
import cn from 'classnames'

const escudosMap: Record<string, string> = escudos

type TamanhoEquipeCard = 'xs' | 'sm' | 'md' | 'lg'

export type EquipeCardProps = {
    nome: string
    somenteEscudo?: boolean
    tamanho?: TamanhoEquipeCard
    horizontal?: boolean
}

export const EquipeCard: FC<EquipeCardProps> = ({
    nome,
    somenteEscudo,
    tamanho = 'sm',
    horizontal
}) => {
    return (
        <div
            className={cn(s['container'], s[tamanho], {
                [s['horizontal']]: horizontal
            })}
        >
            <img className={s['escudo']} src={escudosMap[nome]} alt={nome} />
            {!somenteEscudo && <p className={s['titulo']}>{nome}</p>}
        </div>
    )
}
