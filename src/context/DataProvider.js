import { createContext, useEffect, useState } from "react"

const DataContext = createContext({
    data: {},
    loading: true
})

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [logs, setLogs] = useState({
        onloaded: [],
        newFields: [],
        rankAssignment: []
    })

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                const response = await fetch("/assets/data.json")
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const rawData = await response.json()

                if (isMounted) {    
                    setLogs(prevLogs => ({
                            ...prevLogs,
                        onloaded: [...prevLogs.onloaded, rawData]
                    }))
                }

                // =============================
                // ====== add more fields ======
                // =============================

                const newFields = Object.entries(rawData).reduce(
                    (acc, [key, value], index) => {
                        acc[key] = value.map((item, i) => ({
                            id: `${index + 1}`,
                            name: item.name,
                            count: item.count,
                            rank: ""
                        }))

                        return acc
                    }, {}
                )

                if (isMounted) {
                    setLogs(prevLogs => ({
                        ...prevLogs,
                        newFields: [...prevLogs.newFields, newFields]
                    }))
                }

                // ==========================
                // ====== updateByRank ======
                // ==========================

                const updateByRank = (data) => {
                    const allCounts = Object.values(data).flatMap(entries => entries.map(entry => parseInt(entry.count)))

                    const topCount = [...new Set(allCounts)].sort((a, b) => b - a).slice(0, 3)

                    const rankMap = {
                        [topCount[0]]: "firstPlace",
                        [topCount[1]]: "secondPlace",
                        [topCount[2]]: "thirdPlace"
                    }

                    const rankedData = {}

                    Object.entries(data).forEach(([key, value]) => {
                        rankedData[key] = value.map(entry => {
                            const countValue = parseInt(entry.count)
                            const rank = rankMap[countValue] || ""
                            return {
                                ...entry,
                                rank
                            }
                        })
                    })

                    if (isMounted) {
                        setLogs(prevLogs => ({
                            ...prevLogs,
                            rankAssignment: [...prevLogs.rankAssignment, rankedData]
                        }))
                    }

                    return rankedData
                }

                if (isMounted) {
                    setData(updateByRank(newFields))
                }

            } catch (error) {
                console.error("Error loading databases:", error)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadData().catch(error => {
            console.error("Unexpected error:", error)
        })

        return () => {
            isMounted = false
        }
    },[])

    console.log("[ JSON Data - Onloaded        ] - ", logs.onloaded)
    console.log("[ JSON Data - Added Fields    ] - ", logs.newFields)
    console.log("[ JSON Data - Rank Assignment ] - ", logs.rankAssignment)

    return (
        <DataContext.Provider
            value={{
                data,
                loading
        }}>
            { loading ? "Loading..." : children }
        </DataContext.Provider>
    )
}