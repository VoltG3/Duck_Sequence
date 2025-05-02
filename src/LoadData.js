import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {storeResultTable, storeTimeTable} from "./redux/actions"
import config from "./config"

const LoadData = () => {
    const [logs, setLogs] = useState({
        testData_onloaded: [],
        testData_newFields: [],
        testData_rankAssigment: [],
        testData_timeTable: []
    })

    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true

        const getPersonImage = (id) => {
            switch(Number(id)) {
                case 1: return config.persons.URL_person_01;
                case 2: return config.persons.URL_person_02;
                case 3: return config.persons.URL_person_03;
                case 4: return config.persons.URL_person_04;
                case 5: return config.persons.URL_person_05;
                case 6: return config.persons.URL_person_06;
                case 7: return config.persons.URL_person_07;
                case 8: return config.persons.URL_person_08;
                case 9: return config.persons.URL_person_09;
                case 10: return config.persons.URL_person_10;
                default: return null;
            }
        }

        const loadData = async () => {
            try {
                const response = await fetch("/assets/data.json")
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

                const rawData = await response.json()

                if (isMounted) {
                    setLogs(prevLogs => ({
                        ...prevLogs,
                        testData_onloaded: [...prevLogs.testData_onloaded, rawData]
                    }))
                }

                // =============================
                // ====== add more fields ======
                // =============================

                const newFields = rawData.reduce((acc, entry, index) => {
                    Object.entries(entry).forEach(([key, value]) => {
                        if (key.startsWith("person")) {
                            if (!acc[key]) acc[key] = []
                            acc[key].push({
                                id: `${index + 1}`,
                                date: entry.date,
                                count: value.count,
                                name: value.name,
                                rank: "",
                                imageURL: getPersonImage(parseInt(key.replace("person", ""), 10))
                            })
                        }
                    })
                    return acc
                }, {})

                if (isMounted) {
                    setLogs(prevLogs => ({
                        ...prevLogs,
                        testData_newFields: [...prevLogs.testData_newFields, newFields]
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
                        rankedData[key] = value.map(entry => ({
                            ...entry,
                            rank: rankMap[parseInt(entry.count)] || ""
                        }))
                    })

                    if (isMounted) {
                        setLogs(prevLogs => ({
                            ...prevLogs,
                            testData_rankAssigment: [...prevLogs.testData_rankAssigment, rankedData]
                        }))
                    }

                    return rankedData
                }

                const finalData = updateByRank(newFields)

                if (isMounted) {
                    dispatch(storeResultTable(finalData))
                    console.log("[ Loaded and stored to Redux ]", finalData)

                    // ===================================================
                    // ====== construct time table from Obj.peron01 ======
                    // ===================================================

                    const finalTableData = finalData.person01?.map(entry => entry.date) || []
                    dispatch(storeTimeTable(finalTableData))

                    if (isMounted) {
                        setLogs(prevLogs => ({
                            ...prevLogs,
                            testData_timeTable: [...prevLogs.testData_timeTable, finalTableData]
                        }))
                    }
                    // console.log("[ Dates from person01 - finalTableData ]", finalTableData)
                }

            } catch (error) {
                console.error("Error loading databases:", error)
            }
        }

        loadData()

        return () => {
            isMounted = false
        }

    }, [dispatch])

    console.log("[ JSON Data - Onloaded        ] - ", logs.testData_onloaded)
    console.log("[ JSON Data - New Fields      ] - ", logs.testData_newFields)
    console.log("[ JSON Data - Rank Assignment ] - ", logs.testData_rankAssigment)
    console.log("[ JSON Data - Time Table      ] - ", logs.testData_timeTable)

    return null
}

export default LoadData