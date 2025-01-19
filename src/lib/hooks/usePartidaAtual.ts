import { useContext } from 'react'
import { PartidaContext } from '../context/partidaContext'

export const usePartidaAtual = () => {
    return useContext(PartidaContext)
}
