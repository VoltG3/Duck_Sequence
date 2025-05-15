

export const transformScoresDataRankAssigmentPlace = (data) => {
    return data.map(entry => {
        const { date, heroes } = entry

        const counts = heroes.map(h => parseInt(h.count, 10))
        const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a)

        const countToRank = {}
        if (uniqueCounts[0] !== undefined) countToRank[uniqueCounts[0]] = "1st"
        if (uniqueCounts[1] !== undefined) countToRank[uniqueCounts[1]] = "2nd"
        if (uniqueCounts[2] !== undefined) countToRank[uniqueCounts[2]] = "3rd"

        const rankedHeroes = heroes.map(h => ({
            ...h,
            rank: countToRank[parseInt(h.count, 10)] || ""
        }))

        return {
            date,
            heroes: rankedHeroes
        }
    })
}

export const transformScoresDataRankAssigmentTitle = (data) => {

    return data.map(entry => {
        const updateHeroes = entry.heroes.map(hero => {
            if(!hero.rank) return hero

            switch (hero.rank) {
                case "1st": return {...hero, title: "Legendary"}
                case "2nd": return {...hero, title: "Epic"}
                case "3rd": return {...hero, title: "Rare"}
                default: return hero
            }
        })

        return {
            ...entry,
            heroes: updateHeroes
        }
    })
}