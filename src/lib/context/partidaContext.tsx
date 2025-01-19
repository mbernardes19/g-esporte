import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useEffect,
    useMemo,
    useState
} from 'react'
import { DadosPartida } from '../../types/api'
import { findSelectedPartida } from '@lib/utils/findSelectedPartida'
import { getEquipesFromPartidaText } from '@lib/utils/getEquipesFromPartidaText'
import { useNavigation } from '@lib/hooks/useNavigation'

export type PartidaProviderProps = {
    dados: DadosPartida
} & PropsWithChildren

export type DadosPartidaSelecionada = {
    equipe1: string
    equipe2: string
    codigoPartidaAtual: string
} & DadosPartida

export type PartidaContextType = DadosPartidaSelecionada & {
    setCodigoPartidaAtual: Dispatch<SetStateAction<string>>
}

export const PartidaContext = createContext<PartidaContextType>({
    equipe1: '',
    equipe2: '',
    codigoPartidaAtual: '',
    setCodigoPartidaAtual: () => '',
    ListaPartidas: [],
    PartidaAndamento: false,
    MediaGols: {
        TotalGols: 0,
        TotalJogos: 0,
        MediaPorJogo: 0
    },
    Artilharia: [],
    PosseBola: [],
    Lances: [],
    ClassificacaoGrupo: [],
    JogosDia: []
})

export const PartidaProvider: FC<PartidaProviderProps> = ({
    children,
    dados
}) => {
    const [dadosPartida] = useState<DadosPartida | null>(dados ?? null)
    const selectedPartida = findSelectedPartida(
        dadosPartida?.ListaPartidas ?? []
    )
    const [codigoPartidaAtual, setCodigoPartidaAtual] = useState<string>(
        selectedPartida?.Codigo ?? ''
    )
    const { equipe1, equipe2 } = getEquipesFromPartidaText(
        selectedPartida?.Texto ?? ''
    )
    const { push, lastSegment } = useNavigation()

    useEffect(() => {
        if (lastSegment !== codigoPartidaAtual) {
            push(`/${codigoPartidaAtual}`)
        }
    }, [codigoPartidaAtual])

    const value: PartidaContextType = useMemo(
        () => ({
            ...dadosPartida,
            equipe1,
            equipe2,
            codigoPartidaAtual,
            setCodigoPartidaAtual
        }),
        [codigoPartidaAtual]
    )

    return (
        <PartidaContext.Provider value={value}>
            {children}
        </PartidaContext.Provider>
    )
}
