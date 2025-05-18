import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    storeSetDataLoaded,
    storeStatistics,
} from "../redux/actions"

import { transformScoresDataNewFields } from "./dataloader.build.fields"
import { transformScoresDataRankAssigment } from "./dataloader.build.ranks"
import { transformScoresDataRankAssigmentTitles } from "./dataloader.build.titles"
import {
    transformDataExtractDates,
    transformDataSumCount,
    transformDataSumDates
} from "./dataloader.build.slice"

export const DataLoader = () => {
    // for onloaded *.json files
    const [playerData, setPlayerData] = useState(null)
    const [scoresData, setScoresData] = useState(null)
    // for *.json transforming
    const [newCompleteStatisticsData, setNewCompleteStatisticsData] = useState(null)
    const [newFieldScoresData, setNewFieldScoresData] = useState(null)
    const [newAssigmentRankScoresData, setNewAssigmentRankScoresData] = useState(null)
    const [newAssigmentTitleScoresData, setNewAssigmentTitleScoresData] = useState(null)
    // for *.json without changes
    const [newAboutData, setNewAboutData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [
                    responseResultsJSON
                ] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/scores.json`)
                ])

                const [
                    scoresJSON
                ] = await Promise.all([
                    responseResultsJSON.json()
                ])

                if (isMounted) {
                    setScoresData(scoresJSON)

                    // data set 01 - assembly statistics data
                    const completeStatisticData = []
                    completeStatisticData.push(transformDataExtractDates(scoresJSON))
                    completeStatisticData.push(transformDataSumDates(scoresJSON))
                    completeStatisticData.push(transformDataSumCount(scoresJSON))

                        const newFieldScoresData = transformScoresDataNewFields(scoresJSON)
                        setNewFieldScoresData(newFieldScoresData)

                        const newAssigmentRankScoresData = transformScoresDataRankAssigment(newFieldScoresData)
                        setNewAssigmentRankScoresData(newAssigmentRankScoresData)

                        const newAssigmentTitleScoresData = transformScoresDataRankAssigmentTitles(newAssigmentRankScoresData)
                        setNewAssigmentTitleScoresData(newAssigmentTitleScoresData)

                    completeStatisticData.push(newAssigmentTitleScoresData)
                    setNewCompleteStatisticsData(completeStatisticData)


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
            console.log("[ data loader    ] - fetch :: images.json         ", playerData)
            console.log("[ data loader    ] - fetch :: scores.json         ", scoresData)
            console.log("[ data loader    ] -   arr :: statistics new.field", "navigationDates",newCompleteStatisticsData[0])
            console.log("[ data loader    ] -   arr :: statistics new.field", "totalSessions:", newCompleteStatisticsData[1], "totalRounds", newCompleteStatisticsData[2])
            console.log("[ data loader    ] -   arr :: statistics new.field", "scoresData", newFieldScoresData)
            console.log("[ data loader    ] -   arr :: statistics new.rank ", newAssigmentRankScoresData)
            console.log("[ data loader    ] -   arr :: statistics new.title", newAssigmentTitleScoresData)
            console.log("[ data loader    ] - Array :: statistics COMPLETE ", newCompleteStatisticsData)
            console.log("[ data loader    ] -  orig :: aboutData           ", newAboutData)

            dispatch(storeStatistics("statistics_navigation_dates", newCompleteStatisticsData[0]))
            dispatch(storeStatistics("statistics_total_sessions", newCompleteStatisticsData[1]))
            dispatch(storeStatistics("statistics_total_rounds", newCompleteStatisticsData[2]))
            dispatch(storeStatistics("statistics_player_scores", newCompleteStatisticsData[3]))
            dispatch(storeSetDataLoaded(true))


        }
    }, [
        isLoading,
        scoresData,
        newFieldScoresData,
        newAssigmentRankScoresData,
        newAssigmentTitleScoresData,
        dispatch,
        error,
        newAboutData,
        playerData,
        newCompleteStatisticsData])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}