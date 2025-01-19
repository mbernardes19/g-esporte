import { DadosPartida } from '@customTypes/api'
import { useElementInView } from '@lib/utils/hooks/useElementInView'
import { FC, useState } from 'react'
import cn from 'classnames'
import s from './PartidaNavigator.module.scss'
import { PartidaCard } from '@components/PartidaCard/PartidaCard'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'

type PartidaNavigatorProps = {
    dadosPartida: DadosPartida
}

const handleNavigation = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

const navLabels: Record<string, string> = {
    JogosDia: 'Partidas do dia',
    MediaGols: 'Média de gols',
    Artilharia: 'Artilharia',
    PosseBola: 'Posse de bola',
    Lances: 'Lances',
    ClassificacaoGrupo: 'Classificação'
}

export const PartidaNavigator: FC<PartidaNavigatorProps> = ({
    dadosPartida
}) => {
    const [activeSection, setActiveSection] = useState('JogosDia')
    const navItems = Object.keys(dadosPartida).filter(
        (key) => key !== 'ListaPartidas' && key !== 'PartidaAndamento'
    )
    const { equipe1, equipe2, golsEquipe1, golsEquipe2 } = usePartidaAtual()

    useElementInView(
        navItems.map((item) => `#${item}`),
        (entry) => {
            if (entry?.isIntersecting) {
                setActiveSection(entry.target.id)
            }
        }
    )

    return (
        <div className={s['container']}>
            <div className={s['navigator']}>
                <PartidaCard
                    className={s['partida']}
                    equipe1={equipe1}
                    equipe2={equipe2}
                    golsEquipe1={golsEquipe1}
                    golsEquipe2={golsEquipe2}
                    tamanhoEquipeCards="sm"
                    somenteEscudos
                    compact
                />
                <ul>
                    {navItems.map((item, idx) => (
                        <li key={idx}>
                            <button
                                className={cn({
                                    [s['selected']]: activeSection === item
                                })}
                                onClick={() => handleNavigation(item)}
                            >
                                {navLabels[item]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
