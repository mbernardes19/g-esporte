import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { FC, PropsWithChildren } from 'react'

export const Artilharia: FC<PropsWithChildren> = () => {
    const { Artilharia } = usePartidaAtual()

    return (
        <div className="flex gap-4">
            {Artilharia.map((artilharia, idx) => (
                <div key={idx}>
                    <h3 className="font-bold">{artilharia.Jogador}</h3>
                    <p>Gols: {artilharia.Gols}</p>
                    <p>Time: {artilharia.Equipe}</p>
                </div>
            ))}
        </div>
    )
}
