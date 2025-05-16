
export function getInitialCardsFromSession(entry) {
    if (!entry || !Array.isArray(entry.heroes)) return []
    return entry.heroes.map(hero => ({
        id: hero.id,
        count: parseInt(hero.count, 10) || 0
    }))
}