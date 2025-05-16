
export const getSortedCards = (cards) => {
    if (!Array.isArray(cards)) return []
    return [...cards].sort((a, b) => b.count - a.count)
}

export const getTargetCardInfo = (sortedCards, currentStep, cards) => {
    const targetCard = sortedCards[currentStep]
    const currentIndex = cards.findIndex(c => c.id === targetCard.id)

    return { targetCard, currentIndex }
}

export const reorderCards = (cards, fromIndex, toIndex) => {
    const copy = [...cards]
    const [movedItem] = copy.splice(fromIndex, 1)
    copy.splice(toIndex, 0, movedItem)
    return copy
}
