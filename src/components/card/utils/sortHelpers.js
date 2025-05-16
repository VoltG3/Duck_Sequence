
export const getSortedCards = (cards) => {
    return [...cards].sort((a, b) => b.count - a.count)
}

export const getTargetCardInfo = (sortedCards, currentStep, currentCards) => {
    const targetCard = sortedCards[currentStep]
    const currentIndex = currentCards.findIndex(card => card.id === targetCard.id)
    return { targetCard, currentIndex }
}

export const reorderCards = (cards, fromIndex, toIndex) => {
    const updated = [...cards]
    const [movedCard] = updated.splice(fromIndex, 1)
    updated.splice(toIndex, 0, movedCard)
    return updated
}