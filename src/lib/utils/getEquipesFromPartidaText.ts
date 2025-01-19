export const getEquipesFromPartidaText = (partidaText: string) => {
    const equipes = partidaText.split(' x ')
    return {
        equipe1: equipes[0],
        equipe2: equipes[1]
    }
}
