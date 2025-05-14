

export const transformResultDataStatistics = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        console.warn("Input is not an array")
        return null
    }

    // return array
    const statisticsArray = []

    // total_sessions
    const filtered = data.filter(item => "date" in item)

    // total_rounds
    const lastValidEntry = [...data].reverse().find(
        item => "date" in item
    )

    if (!lastValidEntry) {
        return 0
    }

    let totalCount = 0
    for (const [key, value] of Object.entries(lastValidEntry)) {
        if (key.startsWith("hero_") && value && typeof value.count !== "undefined") {
            totalCount += parseInt(value.count, 10) || 0
        }
    }

    statisticsArray.push(filtered.length - 1)
    statisticsArray.push(totalCount)

    return statisticsArray
}