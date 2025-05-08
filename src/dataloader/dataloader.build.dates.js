/**
 * Extracts all unique dates from the provided dataset.
 *
 * This function processes an array of objects and collects all unique values
 * associated with the `date` property of each object. The collected dates are
 * returned as an array.
 *
 * @param {Array<Object>} data - The array of objects containing date information.
 * Each object is expected to have a `date` property.
 * @returns {Array<String>} An array of unique date strings found in the dataset.
 */

export const transformResultDataAllDates = (data) => {
    const dateSet = new Set()

    data.forEach(item => {
        if (item.date) {
            dateSet.add(item.date)
        }
    })

    return Array.from(dateSet)
}