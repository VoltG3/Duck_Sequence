
export const compareHeroCount = (currentResults, previousResults, targetDate, prevDate) => {
    if (!Array.isArray(currentResults) || !Array.isArray(previousResults)) return null

    const currentEntry = currentResults.find(entry => entry.date === targetDate)
    const previousEntry = previousResults.find(entry => entry.date === prevDate)

    //console.log("currentEntry", currentEntry)
    //console.log("previousEntry", previousEntry)

    if (!currentEntry || !previousEntry) return null

    const currentHeroes = currentEntry.heroes
    const previousHeroes = previousEntry.heroes

    return currentHeroes.map(currentHero => {
        const prevHero = previousHeroes.find(h => h.id === currentHero.id)

        const currentCount = parseInt(currentHero.count, 10) || 0
        const prevCount = prevHero ? parseInt(prevHero.count, 10) || 0 : 0

        let animationType = "animation_level_equal"

        if (currentCount > prevCount) { animationType = "animation_level_up"
        } else if (currentCount < prevCount) { animationType = "animation_level_down" }

        return {
            id: currentHero.id,
            animation: animationType
        }
    })
}