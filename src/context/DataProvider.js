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

                console.log("[ Onloaded Data ] - ", rawData)

                // ====== add more fields ======
                const updateRawData = Object.entries(rawData).reduce(
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

                if (isMounted) {
                    setData(updateRawData)
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

    console.log("[ Added Fields to Raw Data ] - ", data)

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