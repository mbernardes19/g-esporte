import { Classificacao } from '@customTypes/api'
import { usePartidaAtual } from '@lib/hooks/usePartidaAtual'
import { FC, PropsWithChildren } from 'react'
import s from './TabelaClassificacao.module.scss'

const transformString = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2')

export const TabelaClassificacao: FC<PropsWithChildren> = () => {
    const { ClassificacaoGrupo } = usePartidaAtual()

    return (
        <table className={s['table']}>
            {ClassificacaoGrupo.map((grupo, idx) => {
                const headers =
                    grupo.Classificacao.length > 0
                        ? Object.keys(grupo.Classificacao[0])
                        : []
                return (
                    <>
                        <thead key={idx}>
                            <tr>
                                {headers.map((header, headerIdx) => (
                                    <th key={headerIdx}>
                                        {transformString(header)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {grupo.Classificacao.map(
                                (classificacao, classificacoIdx) => {
                                    const headers = Object.keys(
                                        classificacao
                                    ) as unknown as (keyof Classificacao)[]

                                    return (
                                        <tr key={classificacoIdx}>
                                            {headers.map((header, idx) => (
                                                <td key={idx}>
                                                    {classificacao[header]}
                                                </td>
                                            ))}
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </>
                )
            })}
        </table>
    )
}
