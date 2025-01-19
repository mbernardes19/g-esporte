import { ListaPartida } from '@customTypes/api'

export const findSelectedPartida = (partidas: ListaPartida[]): ListaPartida =>
    partidas.find((partida) => partida.Selected)!
