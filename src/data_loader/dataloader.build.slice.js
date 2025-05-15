

export const transformDataExtractDates = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        console.warn("Input is not an array")
        return null
    }

    // extract all fields : "date"
    const dateSet = new Set()

    data.forEach(item => {
        if (item.date) {
            dateSet.add(item.date)
        }
    })

    return Array.from(dateSet)
}

export const transformDataSumDates = (data) => {
    // count of fields : "date"
    const count = data.filter(item => "date" in item).length
    return count - 1
}

export const transformDataSumCount = (data) => {
    // summ of fields : "count" by last field : "date" entry
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