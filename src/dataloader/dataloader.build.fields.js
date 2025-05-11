/**
 * Transforms input data by restructuring and organizing fields.
 *
 * This function processes an array of data objects, extracting the `date` from each entry
 * and converting other properties into a list of heroes with defined attributes such as
 * `id`, `title`, `name`, `count`, and an empty `rank`.
 *
 * @param {Array<Object>} data - The array of data objects to be transformed.
 * @param {string} data[].date - The date field present in each entry.
 * @param {Object} data[].rest - Remaining properties in the entry, which represent hero details.
 * @returns {Array<Object>} An array of transformed objects, each containing:
 *   - `date` (string) - The original date value.
 *   - `heroes` (Array<Object>) - An array of hero objects with fields `id`, `title`, `name`, `count`, and `rank`.
 */

export const transformResultDataNewFields = (data) => {
    return data.map(entry => {
        const { date, ...rest } = entry

        const heroes = Object.entries(rest).map(([key, value]) => ({
            id: key,
            title: "Uncommon",
            name: value.name,
            count: value.count,
            rank: ""
        }))

        return { date, heroes }
    })
}
