export const transformScoresDataRankAssigment = (data) => {

    function rankThreeTimesFirst(data) {
        const streakMap = {}

        for (let day of data) {
            for (let hero of day.heroes) {
                const name = hero.name

                if (!streakMap[name]) {
                    streakMap[name] = []
                }

                if (hero.rank === "1st") {
                    streakMap[name].push(true)

                    // If the player has three consecutive "1st" positions
                    if (streakMap[name].length >= 3) {
                        hero.rank = "three_times_first"
                        // Keep only the last two to continue checking streaks
                        streakMap[name] = streakMap[name].slice(-2)
                    }
                } else {
                    // Reset streak if not 1st
                    streakMap[name] = []
                }
            }
        }

        return data
    }

    const scoredRanks = (data) => {
        return data.map(entry => {
            const { date, heroes } = entry

            // Exclude 'three_times_first' from top 3 calculation
            const eligibleHeroes = heroes.filter(h => h.rank !== "three_times_first")
            const counts = eligibleHeroes.map(h => parseInt(h.count, 10))
            const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a)

            const countToRank = {}
            if (uniqueCounts[0] !== undefined) countToRank[uniqueCounts[0]] = "1st"
            if (uniqueCounts[1] !== undefined) countToRank[uniqueCounts[1]] = "2nd"
            if (uniqueCounts[2] !== undefined && uniqueCounts[2] !== 0) countToRank[uniqueCounts[2]] = "3rd"

            const rankedHeroes = heroes.map(h => {
                const count = parseInt(h.count, 10)

                if (h.rank === "three_times_first") {
                    return { ...h, rank: "three_times_first" }
                }

                if (count === 0) {
                    return { ...h, rank: "0th" }
                }

                const newRank = countToRank[count]
                if (count === 0) return { ...h, rank: "0th" }
                if (newRank) return { ...h, rank: newRank }
                return { ...h, rank: "unranked" }
            })

            return { date, heroes: rankedHeroes }
        })
    }

    const lowestRank = (data) => {
        return data.map(dateItem => {
            const updatedHeroes = dateItem.heroes.map(hero => {
                if (parseInt(hero.count, 10) === 0) {
                    return { ...hero, rank: "0th" }
                }
                return hero
            })
            return { ...dateItem, heroes: updatedHeroes }
        })
    }


    // ✅ Processing sequence:
    const scoredFirst = scoredRanks(data)                // Assign initial 1st/2nd/3rd ranks
    const withStreak = rankThreeTimesFirst(scoredFirst)  // Replace with 'three_times_first' if 3 consecutive 1st
    const reScored = scoredRanks(withStreak)             // Recalculate ranks excluding 'three_times_first'
    const finalResult = lowestRank(reScored)             // Assign '0th' to those with count = 0

    return finalResult
}