/**
 * Processes JSON data to build ranking information based on player counts.
 *
 * This function takes an array of JSON objects where each object contains a `date` field and player data fields.
 * It determines the ranking of players based on their `count` values and assigns ranks such as
 * "place_first", "place_second", and "place_third" to the top three unique counts. For all other players,
 * no rank is assigned.
 *
 * @param {Array<Object>} jsonData - An array of objects, where each object represents a specific date and its player data.
 *                                   The object should contain a `date` field and additional fields for each player,
 *                                   where each player is represented as an object with properties `id`, `name`, and `count`.
 * @returns {Array<Object>} An array of objects with the same structure as the input, but where each player also has
 *                          a `rank` property indicating their position based on their `count`. Ranks are computed
 *                          as "place_first", "place_second", and "place_third" for the top three unique counts.
 */

export const dataLoaderBuildRanks = (jsonData) => {
    return jsonData.map(entry => {
        const {date, ...players} = entry

        const counts = Object.values(players).map(p => parseInt(p.count, 10))
        const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a)

        const countToRank = {}
        if (uniqueCounts[0] !== undefined) countToRank[uniqueCounts[0]] = "place_first"
        if (uniqueCounts[1] !== undefined) countToRank[uniqueCounts[1]] = "place_second"
        if (uniqueCounts[2] !== undefined) countToRank[uniqueCounts[2]] = "place_third"

        const newPlayers = Object.fromEntries(
            Object.entries(players).map(([key, value]) => {
                const numericCount = parseInt(value.count, 10);

                return [
                    key,
                    {
                        id: value.id,
                        name: value.name,
                        count: value.count,
                        rank: countToRank[numericCount] || ""
                    }
                ]
            })
        )

        return {
            date,
            ...newPlayers
        }
    })
}