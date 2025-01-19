export const removeSpecialChars = (text: string) => {
    return text
        .normalize('NFD') // Separa caracteres e diacríticos (como é, è, ô, ã, ç)
        .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos
        .replace(/[^\w\s]|_/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '') // Remove espaços
}
