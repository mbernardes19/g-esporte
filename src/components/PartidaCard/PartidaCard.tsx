import { FC } from 'react'
import { EquipeCard, TamanhoEquipeCard } from '../EquipeCard/EquipeCard'
import { PartidaStatus } from 'src/types/api'
import s from './PartidaCard.module.scss'
import { Placar } from '../Placar/Placar'
import cn from 'classnames'
import ConditionalWrapper from '@components/UI/ConditionalWrapper/ConditionalWrapper'

export type PartidaCardProps = {
    equipe1: string
    equipe2: string
    golsEquipe1?: number
    golsEquipe2?: number
    data?: string
    status?: PartidaStatus
    tamanhoEquipeCards?: TamanhoEquipeCard
    className?: string
    somenteEscudos?: boolean
    compact?: boolean
}

export const PartidaCard: FC<PartidaCardProps> = ({
    className,
    equipe1,
    equipe2,
    golsEquipe1,
    golsEquipe2,
    data,
    status,
    tamanhoEquipeCards,
    somenteEscudos,
    compact
}) => {
    const comPlacar = golsEquipe1 !== undefined && golsEquipe2 !== undefined
    const comInfo = data !== undefined || status !== undefined

    if (compact) {
        return (
            <div
                className={cn(s['compact-container'], {
                    [className ?? '']: className
                })}
            >
                <EquipeCard
                    nome={equipe1}
                    tamanho={tamanhoEquipeCards ?? 'md'}
                    somenteEscudo={somenteEscudos}
                />
                {comPlacar && (
                    <Placar
                        className={s['compact-placar']}
                        golsEquipe1={golsEquipe1}
                        golsEquipe2={golsEquipe2}
                    />
                )}
                <EquipeCard
                    nome={equipe2}
                    tamanho={tamanhoEquipeCards ?? 'md'}
                    somenteEscudo={somenteEscudos}
                />
            </div>
        )
    }

    return (
        <div
            className={cn(s['container'], {
                [s['sem-placar']]: !comPlacar,
                [className!]: className
            })}
        >
            <ConditionalWrapper
                condition={comInfo}
                wrapper={(children) => (
                    <div className={s['equipes']}>{children}</div>
                )}
            >
                <div className={s['equipe-container']}>
                    <EquipeCard
                        nome={equipe1}
                        tamanho={tamanhoEquipeCards ?? 'md'}
                        somenteEscudo={somenteEscudos}
                    />
                    {!comPlacar && <span>{'x'}</span>}
                    <EquipeCard
                        nome={equipe2}
                        tamanho={tamanhoEquipeCards ?? 'md'}
                        somenteEscudo={somenteEscudos}
                    />
                </div>
                {comPlacar && (
                    <div className={s['placar-container']}>
                        <Placar
                            golsEquipe1={golsEquipe1}
                            golsEquipe2={golsEquipe2}
                        />
                    </div>
                )}
            </ConditionalWrapper>
            {comInfo && (
                <div className={s['info']}>
                    {data && <span>{data}</span>}
                    {status && <span>{status}</span>}
                </div>
            )}
        </div>
    )
}
