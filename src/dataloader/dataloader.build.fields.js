/**
 * Processes a data array, transforming the structure of each object within it.
 *
 * Each object in the input array is mapped to a new structure. The resulting object contains:
 * - A `date` property copied from the original object.
 * - Transformed player properties, where each key starting with "player" is modified to include:
 *   - A unique `id` (as a string).
 *   - The original `name` and `count` values.
 *   - An additional `rank` property initialized to an empty string.
 *
 * Non-player-related keys are excluded from the resulting objects.
 *
 * @param {Array<Object>} data - An array of objects where each object may contain date and player-related properties.
 * @returns {Array<Object>} A new array of transformed objects with structured player data and a date property.
 */

export const dataLoaderBuildFields = (data) => {
    return data.map(item => {
        const newItem = { date: item.date }
        let idCounter = 1

        Object.keys(item).forEach(key => {
            if (key.startsWith("player")) {
                const { count, name } = item[key]

                newItem[key] = {
                    id: String(idCounter),
                    name,
                    count,
                    rank: ""
                }

                idCounter++
            }
        })

        return newItem
    })
}