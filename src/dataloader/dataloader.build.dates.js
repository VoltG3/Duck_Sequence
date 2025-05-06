/**
 * Processes an array of data objects to create a mapping of dates to corresponding objects.
 *
 * @function dataLoaderBuildDates
 * @param {Array} data - An array of objects, where each object contains a `date` property.
 * @returns {Object} An object where each key is a unique date from the given data, and the value is an object containing the `date` property.
 */

export const dataLoaderBuildDates = (data) => {
    return data.reduce((acc, item) => {
        acc[item.date] = { date: item.date }
        return acc
    }, {})
}