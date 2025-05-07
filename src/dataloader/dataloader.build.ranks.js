
export const transformResultDataRankAssigment = (jsonData) => {
    return jsonData.map(entry => {
        const { date, heroes } = entry

        const counts = heroes.map(h => parseInt(h.count, 10))
        const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a)

        const countToRank = {};
        if (uniqueCounts[0] !== undefined) countToRank[uniqueCounts[0]] = "place_first"
        if (uniqueCounts[1] !== undefined) countToRank[uniqueCounts[1]] = "place_second"
        if (uniqueCounts[2] !== undefined) countToRank[uniqueCounts[2]] = "place_third"

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
