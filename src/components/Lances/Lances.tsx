import { FC } from 'react'
import { Lance } from '../../types/api'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { LanceCard } from '../LanceCard/LanceCard'
import s from './Lances.module.scss'
import Skeleton from 'react-loading-skeleton'

export type LancesProps = {
    lances: Lance[]
}

export const Lances: FC<LancesProps> = ({ lances }) => {
    const { equipe1, equipe2 } = usePartidaAtual()

    return (
        <div className={s['container']}>
            {lances.map((lance, idx) => (
                <LanceCard
                    key={idx}
                    equipe1={equipe1}
                    equipe2={equipe2}
                    lance={lance}
                />
            ))}
        </div>
    )
}

export const LancesLoader = () => (
    <Skeleton
        containerClassName="min-h-[400px] grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        className="aspect-square !w-full"
        baseColor="#a1a5ab"
        highlightColor="#dadfe6"
        count={4}
        inline
        duration={0.75}
    />
)

export default Lances
