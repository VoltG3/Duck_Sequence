import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {storeDates, storeResultTable, storeSetDataLoaded} from "./redux/actions"
import config from "./config"

const LoadData = () => {
    const [jsonData, setJsonData] = useState(null)
    const [newObjectDates, setNewObjectDates] = useState(null)
    const [newObjectImages, setNewObjectImages] = useState(null)
    const [newFieldsObject, setNewFieldsObject] = useState(null)
    const [newRankAssigmentObject, setNewRankAssigmentData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            const response = await fetch("/assets/data.json")

            if (!response.ok) {
                console.error(`Error: HTTP status ${response.status}`)

                return
            }

            const data = await response.json();
            console.log("[ jsonData onloaded       ]", data)

            if (isMounted) {
                setJsonData(data)
            }
        }

        loadData().catch(error => {
            console.error("Error during loading data:", error)
        })

        return () => {
            isMounted = false
        }
    }, [])

    // ================
    //  newObjectDates
    // ================

    useEffect(() => {
        if (jsonData !== null) {

            const dateObject = jsonData.reduce((acc, item) => {
                acc[item.date] = { date: item.date }
                return acc
            }, {})

            setNewObjectDates(dateObject)

            console.log("[ newObjectDates created  ]", dateObject)
        }
    }, [jsonData])

    // =================
    //  newObjectImages
    // =================

    useEffect(() => {
        if (jsonData !== null) {

            const getPlayerImage = (id) => {
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

            const imageObject = {}

            jsonData.forEach(item => {
                Object.keys(item).forEach(key => {
                    if (key.startsWith("player")) {
                        const id = parseInt(key.replace("player", ""), 10)
                        imageObject[key] = { imageURL: getPlayerImage(id) }
                    }
                })
            })

            console.log("[ newObjectImages created ]", imageObject)
            setNewObjectImages(imageObject)
        }
    }, [jsonData])

    // =================
    //  newFieldsObject
    // =================

    useEffect(() => {
        if (jsonData !== null) {
            const transformedData = jsonData.map(item => {
                const newItem = { date: item.date }

                Object.keys(item).forEach(key => {
                    if (key.startsWith("player")) {
                        const { count, name } = item[key]
                        newItem[key] = {
                            count,
                            name,
                            rank: ""
                        }
                    }
                })

                return newItem
            })

            console.log("[ newFieldsObject created ]", transformedData)
            setNewFieldsObject(transformedData)
        }
    }, [jsonData])


    // ========================
    //  newRankAssigmentObject
    // ========================

    useEffect(() => {
        if (jsonData !== null) {
            const rankAssigment = jsonData.map(entry => {
                const { date, ...players } = entry;

                const counts = Object.values(players).map(p => parseInt(p.count, 10));
                const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a)

                const countToRank = {}
                if (uniqueCounts[0] !== undefined) countToRank[uniqueCounts[0]] = "place_first"
                if (uniqueCounts[1] !== undefined) countToRank[uniqueCounts[1]] = "place_second"
                if (uniqueCounts[2] !== undefined) countToRank[uniqueCounts[2]] = "place_third"

                const newPlayers = Object.fromEntries(
                    Object.entries(players).map(([key, value]) => {
                        const numericCount = parseInt(value.count, 10)
                        return [key, {
                            ...value,
                            rank: countToRank[numericCount] || ""
                        }]
                    })
                )

                return {
                    date,
                    ...newPlayers
                }
            })


            console.log("[ newRankAssigmentObject  ]", rankAssigment)
            setNewRankAssigmentData(rankAssigment)
        }
    }, [jsonData])

    useEffect(() => {
        if (jsonData !== null) {
            dispatch(storeDates(newObjectDates))
            dispatch(storeResultTable(newRankAssigmentObject))
            dispatch(storeSetDataLoaded(true))
        }
    }, [jsonData, dispatch, newObjectDates, newRankAssigmentObject])

    return null
}

export default LoadData