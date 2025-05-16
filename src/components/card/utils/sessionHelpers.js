
export const getSelectedEntryByDate = (results, date) => {
    return results.find(entry => entry.date === date)
}

export const getInitialCardsFromSession = (entry) => {
    if (!Array.isArray(entry.heroes)) return []
    return entry.heroes.map(hero => ({
        id: hero.id,
        count: parseInt(hero.count, 10) || 0
    }))
}

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

export const handleSessionDateChange = (
    currentDate,
    results,
    prevDateRef,
    prevResultsRef,
    gradesRef
) => {
    if (currentDate !== prevDateRef.current) {
        console.log("Different date, updating cards:", prevDateRef.current, "→", currentDate)

        gradesRef.current = compareHeroCount(
            results,
            prevResultsRef.current,
            currentDate,
            prevDateRef.current
        )

        prevDateRef.current = currentDate
        prevResultsRef.current = results
    }
}