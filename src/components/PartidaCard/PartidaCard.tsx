import { FC } from 'react'
import { EquipeCard } from '../EquipeCard/EquipeCard'
import { PartidaStatus } from 'src/types/api'
import s from './PartidaCard.module.scss'
import { Placar } from '../Placar/Placar'

export type PartidaCardProps = {
    equipe1: string
    equipe2: string
    golsEquipe1?: number
    golsEquipe2?: number
    data?: string
    status?: PartidaStatus
}

export const PartidaCard: FC<PartidaCardProps> = ({
    equipe1,
    equipe2,
    golsEquipe1,
    golsEquipe2,
    data,
    status
}) => {
    return (
        <div className={s['container']}>
            <div className={s['equipes']}>
                <div className={s['equipe-container']}>
                    <EquipeCard nome={equipe1} tamanho="md" />
                    <EquipeCard nome={equipe2} tamanho="md" />
                </div>
                {golsEquipe1 && golsEquipe2 && (
                    <div className={s['placar-container']}>
                        <Placar
                            golsEquipe1={golsEquipe1}
                            golsEquipe2={golsEquipe2}
                        />
                    </div>
                )}
            </div>
            {(status || data) && (
                <div className={s['info']}>
                    {data && <span>{data}</span>}
                    {status && <span>{status}</span>}
                </div>
            )}
        </div>
    )
}
