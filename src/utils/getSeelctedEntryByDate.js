
export function getSelectedEntryByDate(results, date) {
    if (!Array.isArray(results)) return null
    return results.find(entry => entry.date === date)
}