import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    storePlayerDates,
    storePlayerResults,
    storePlayerDescriptions,
    storeSetDataLoaded,
    storeSessionsStatistics, storeAbout, storePlayerData
} from "../redux/actions"

import { transformPlayerDataNewFields, transformScoresDataNewFields } from "./dataloader.build.fields"
import { transformScoresDataRankAssigmentPlace, transformScoresDataRankAssigmentTitle } from "./dataloader.build.ranks"
import { transformStatisticsData } from "./dataloader.build.slice"

export const DataLoader = () => {
    // for onloaded *.json files
    const [playerData, setPlayerData] = useState(null)
    const [scoresData, setScoresData] = useState(null)
    const [aboutData, setAboutData] = useState(null)
    const [descriptionsData, setDescriptionsData] = useState(null)
    // for *.json transforming
    const [newStatisticsData, setNewStatisticsData] = useState(null)
    const [newPlayerData, setNewPlayerData] = useState(null)
    const [newFieldScoresData, setNewFieldScoresData] = useState(null)
    const [newAssigmentRankScoresData, setNewAssigmentRankScoresData] = useState(null)
    const [newAssigmentTitleScoresData, setNewAssigmentTitleScoresData] = useState(null)
    // for *.json without changes
    const [newAboutData, setNewAboutData] = useState(null)
    const [newDescriptionsData, setNewDescriptionsData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [
                    responsePlayerJSON,
                    responseResultsJSON,
                    responseAboutJSON,
                    responseDescriptionsJSON
                ] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/player.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/scores.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/about.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`)
                ])

                const [
                    playerJSON,
                    scoresJSON,
                    aboutJSON,
                    descriptionsJSON
                ] = await Promise.all([
                    responsePlayerJSON.json(),
                    responseResultsJSON.json(),
                    responseAboutJSON.json(),
                    responseDescriptionsJSON.json()
                ])

                if (isMounted) {
                    setPlayerData(playerJSON)
                    setScoresData(scoresJSON)
                    setAboutData(aboutJSON)
                    setDescriptionsData(descriptionsJSON)

                    // transform data set 01 - statistics
                    const newStatisticsData = transformStatisticsData(scoresJSON)
                    setNewStatisticsData(newStatisticsData)

                    // transform data set 02 - player data
                    const newFieldsPlayerData = transformPlayerDataNewFields(playerJSON)
                    setNewPlayerData(newFieldsPlayerData)

                    // transform data set 03 - scores data
                    const newFieldScoresData = transformScoresDataNewFields(scoresJSON)
                    setNewFieldScoresData(newFieldScoresData)
                    const newAssigmentRankScoresData = transformScoresDataRankAssigmentPlace(newFieldScoresData)
                    setNewAssigmentRankScoresData(newAssigmentRankScoresData)
                    const newAssigmentTitleScoresData = transformScoresDataRankAssigmentTitle(newAssigmentRankScoresData)
                    setNewAssigmentTitleScoresData(newAssigmentTitleScoresData)

                    // data without changes 04
                    setNewAboutData(aboutJSON)
                    setNewDescriptionsData(descriptionsJSON)

                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message)
                    console.error("Error during loading data:", err)
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false)
                }
            }
        }

        loadAllData().then(() => {
        }).catch(err => {
            console.error("Unhandled error in loadAllData:", err)
        })

        return () => {
            isMounted = false
        }
    }, [])

    useEffect(() => {
        if (scoresData !== null && !isLoading && !error) {
            console.log("[ data loader    ] - fetch :: player.json         ", playerData)
            console.log("[ data loader    ] - fetch :: scores.json         ", scoresData)
            console.log("[ data loader    ] - fetch :: about.json          ", aboutData)
            console.log("[ data loader    ] - fetch :: descriptions.json   ", descriptionsData)
            console.log("[ data loader    ] -   arr :: statistics new.field", "navigationDates", newStatisticsData[0])
            console.log("[ data loader    ] -   arr :: statistics new.field", "totalSessions:", newStatisticsData[1], "totalRounds", newStatisticsData[2])
            console.log("[ data loader    ] -   arr :: playerData new.field", newPlayerData)
            console.log("[ data loader    ] -   arr :: scoresData new.field", newFieldScoresData)
            console.log("[ data loader    ] -   arr :: scoresData new.rank ", newAssigmentRankScoresData)
            console.log("[ data loader    ] -   arr :: scoresData new.title", newAssigmentTitleScoresData)
            console.log("[ data loader    ] -  orig :: aboutData           ", newAboutData)
            console.log("[ data loader    ] -  orig :: descriptionsData    ", newDescriptionsData)

            dispatch(storePlayerDates(newStatisticsData))
            dispatch(storePlayerResults(newAssigmentTitleScoresData))
            dispatch(storePlayerData(newPlayerData))
            dispatch(storePlayerDescriptions(newDescriptionsData))
            dispatch(storeSetDataLoaded(true))
            dispatch(storeAbout(newAboutData))

        }
    }, [
        isLoading,
        scoresData,
        newPlayerData,
        newFieldScoresData,
        newAssigmentRankScoresData,
        newAssigmentTitleScoresData,
        descriptionsData,
        dispatch,
        error,
        newAboutData,
        playerData,
        aboutData,
        newDescriptionsData,
        newStatisticsData])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}