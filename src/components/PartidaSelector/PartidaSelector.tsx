import { PartidaCard } from '@components/PartidaCard/PartidaCard'
import { ListaPartida } from '@customTypes/api'
import { FC } from 'react'
import s from './PartidaSelector.module.scss'
import cn from 'classnames'
import { getEquipesFromPartidaText } from '@lib/utils/getEquipesFromPartidaText'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'

type PartidaSelectorProps = {
    partidas: ListaPartida[]
}

export const PartidaSelector: FC<PartidaSelectorProps> = ({ partidas }) => {
    const { codigoPartidaAtual, setCodigoPartidaAtual } = usePartidaAtual()

    return (
        <>
            {partidas.map((partida, idx) => {
                const { equipe1, equipe2 } = getEquipesFromPartidaText(
                    partida.Texto
                )

                return (
                    <PartidaCard
                        className={cn({
                            [s['selected']]:
                                codigoPartidaAtual === partida.Codigo
                        })}
                        key={idx}
                        equipe1={equipe1}
                        equipe2={equipe2}
                        tamanhoEquipeCards="sm"
                        somenteEscudos
                        onClick={() => setCodigoPartidaAtual(partida.Codigo)}
                    />
                )
            })}
        </>
    )
}
