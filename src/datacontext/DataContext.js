import { createContext, useState, useEffect } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [aboutData, setAboutData] = useState(null)
    const [descriptionsData, setDescriptionsData] = useState(null)

    useEffect(() => {
        Promise.all([
            fetch(`${process.env.PUBLIC_URL}/assets/about.json`),
            fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`),
        ])
            .then(responses => {
                if (responses.some(res => !res.ok)) {
                    throw new Error("Fetch failed!");
                }

                return Promise.all(responses.map(res => res.json()))
            })
            .then(([about, descriptions]) => {
                setAboutData(about)
                setDescriptionsData(descriptions)

                console.log("[ dataProvider   ] - fetch :: about.json          ", about)
                console.log("[ dataProvider   ] - fetch :: about.json          ", descriptions)

            })
            .catch(error => {
                console.error("Error while *.json onloading", error)
            })
    }, [])

    return (
        <DataContext.Provider value={{ aboutData, descriptionsData }}>
            { children }
        </DataContext.Provider>
    )
}