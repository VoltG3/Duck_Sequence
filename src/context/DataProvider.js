import {createContext, useEffect, useState} from "react"

const DataContext = createContext({
    data: {},
    loading: true
})

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                const response = await fetch("/assets/data.json")
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const rawData = await response.json();

                console.log("[ JSON Data - Onloaded ]", rawData)

                // =============================
                // ====== add more fields ======
                // =============================

                const addFields = Object.entries(rawData).reduce(
                    (acc, [key, value], index) => {
                        acc[key] = value.map((item, i) => ({
                            id: `${index + 1}`,
                            name: item.name,
                            image: "",
                            count: item.count,
                            rank: ""
                        }))
                        return acc
                    }, {}
                )

                console.log("[ JSON Data - Added Fields ] - ", addFields)

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

                    console.log("[ JSON Data - Rank Assignment ] - ", rankedData)

                    return rankedData
                }

                if (isMounted) {
                    setData(updateByRank(addFields))
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
            console.error("Unexpected error:", error);
        })

        return () => {
            isMounted = false
        }
    },[])

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