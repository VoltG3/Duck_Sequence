/**
 * Extracts a unique set of dates from the provided data array.
 *
 * This function goes through an array of objects and collects all unique values
 * of the `date` property found within the objects. The resulting unique dates
 * are returned as an array.
 *
 * @param {Array<Object>} data - An array of objects, where each object may contain a `date` property.
 * @returns {Array<string>} An array of unique date strings collected from the `date` property of the input objects.
 */

export const dataLoaderBuildDates = (data) => {
    const dateSet = new Set()

    data.forEach(item => {
        if (item.date) {
            dateSet.add(item.date)
        }
    })

    return Array.from(dateSet)
}