import { PartidaCard } from '@components/PartidaCard/PartidaCard'
import { ListaPartida } from '@customTypes/api'
import { FC, useState } from 'react'
import s from './PartidaSelector.module.scss'
import cn from 'classnames'

type PartidaSelectorProps = {
    partidas: ListaPartida[]
}

const getEquipesFromPartidaText = (partidaText: string) => {
    const equipes = partidaText.split(' x ')
    return {
        equipe1: equipes[0],
        equipe2: equipes[1]
    }
}

const findSelectedPartida = (partidas: ListaPartida[]) =>
    partidas.find((partida) => partida.Selected)

export const PartidaSelector: FC<PartidaSelectorProps> = ({ partidas }) => {
    const [selectedPartida, setSelectedPartida] = useState<string>(
        findSelectedPartida(partidas)?.Codigo ?? ''
    )

    return (
        <>
            {partidas.map((partida, idx) => {
                const { equipe1, equipe2 } = getEquipesFromPartidaText(
                    partida.Texto
                )

                return (
                    <PartidaCard
                        className={cn({
                            [s['selected']]: selectedPartida === partida.Codigo
                        })}
                        key={idx}
                        equipe1={equipe1}
                        equipe2={equipe2}
                        tamanhoEquipeCards="sm"
                        somenteEscudos
                        onClick={() => setSelectedPartida(partida.Codigo)}
                    />
                )
            })}
        </>
    )
}
