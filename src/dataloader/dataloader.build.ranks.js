/**
 * Transforms and assigns rank based on the count values for heroes within the provided data.
 * Takes in an array of data objects, each containing a date and corresponding hero details,
 * and ranks the heroes based on the "count" property in descending order.
 * Assigns "1st", "2nd", or "3rd" to the top three unique counts and leaves others unranked.
 *
 * @param {Array<Object>} jsonData - An array of objects, where each object contains a date
 * and a list of heroes with their respective counts.
 * @param {string} jsonData[].date - The date of the data entry.
 * @param {Array<Object>} jsonData[].heroes - A list of hero objects for the given date.
 * @param {string} jsonData[].heroes[].name - The name of a hero.
 * @param {string} jsonData[].heroes[].count - The count associated with the hero (provided as a string).
 * @returns {Array<Object>} Transformed data with ranks assigned to heroes based on their counts.
 * Each object in the result contains the original date and a list of heroes with their ranks added.
 */

export const transformResultDataRankAssigment = (jsonData) => {
    return jsonData.map(entry => {
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
