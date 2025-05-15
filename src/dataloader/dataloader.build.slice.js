

export const transformStatisticsData = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        console.warn("Input is not an array")
        return null
    }

    // Get all fields: date
    const transformArray = (data) => {
        const dateSet = new Set()

        data.forEach(item => {
            if (item.date) {
                dateSet.add(item.date)
            }
        })

        return Array.from(dateSet)
    }

    // Get count of total_sessions by field: date
    const transformArrayTotalSessions = (data) => {
        const count = data.filter(item => "date" in item).length
        return count - 1
    }

    // Get total_rounds by the last field: date (entry)
    const transformArrayTotalRounds = (data) => {
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

        return totalCount
    }

    const statisticsArray = []

    statisticsArray.push(transformArray(data))
    statisticsArray.push(transformArrayTotalSessions(data))
    statisticsArray.push(transformArrayTotalRounds(data))

    return statisticsArray
}