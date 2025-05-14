import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    storePlayerDates,
    storePlayerResults,
    storePlayerDescriptions,
    storeSetDataLoaded,
    storePlayerImages, storeSessionsStatistics, storeAbout, storePlayerData
} from "../redux/actions"
import { transformResultDataAllDates } from "./dataloader.build.dates"
import { transformResultDataNewFields } from "./dataloader.build.fields"
import { transformResultDataRankAssigment } from "./dataloader.build.ranks"
import { transformResultDataTilteAssigment } from "./dataloader.build.titles"
import {transformResultDataStatistics} from "./dataloader.build.stats";
import {transformPlayerNewFields} from "./dataloader.build.playerFields";

export const DataLoader = () => {
    const [resultsData, setResultsData] = useState(null)
    const [imagesData, setImagesData] = useState(null)
    const [descriptionsData, setDescriptionsData] = useState(null)
    const [aboutData, setAboutData] = useState(null)
    const [player, setPlayer] = useState(null)

    const [newDates, setNewDates] = useState(null)
    const [newFields, setNewFields] = useState(null)
    const [newRankAssignment, setNewRankAssignment] = useState(null)
    const [newTitlesAssigment, setNewTitlesAssigment] = useState(null)
    const [newSessionStatistics, setNewSessionStatistics] = useState(null)
    const [newAbout, setNewAbout] = useState(null)
    const [newPlayer, setNewPlayer] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [
                    responseResultsJSON,
                    responseImagesJSON,
                    responseDescriptionsJSON,
                    responseAboutJSON,
                    responsePlayerJSON
                ] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/results.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/images.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/about.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/player.json`),
                ])

                const [
                    resultsJSON,
                    imagesJSON,
                    descriptionsJSON,
                    aboutJSON,
                    playerJSON
                ] = await Promise.all([
                    responseResultsJSON.json(),
                    responseImagesJSON.json(),
                    responseDescriptionsJSON.json(),
                    responseAboutJSON.json(),
                    responsePlayerJSON.json()
                ])

                if (isMounted) {
                    setResultsData(resultsJSON)
                    setImagesData(imagesJSON)
                    setDescriptionsData(descriptionsJSON)
                    setAboutData(aboutJSON)
                    setPlayer(playerJSON)

                    const newDates = transformResultDataAllDates(resultsJSON)
                    setNewDates(newDates)
                    const newFields = transformResultDataNewFields(resultsJSON)
                    setNewFields(newFields)
                    const newRanks = transformResultDataRankAssigment(newFields)
                    setNewRankAssignment(newRanks)
                    const newTitles = transformResultDataTilteAssigment(newRanks)
                    setNewTitlesAssigment(newTitles)
                    const newStatistics = transformResultDataStatistics(resultsJSON)
                    setNewSessionStatistics(newStatistics)

                    setNewAbout(aboutJSON)

                    const newPlayerFields = transformPlayerNewFields(playerJSON)
                    setNewPlayer(newPlayerFields)
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
        if (resultsData !== null && !isLoading && !error) {

            console.log("[ data loader    ] - results.json           ", resultsData)
            console.log("[ data loader    ] - player_data.json            ", imagesData)
            console.log("[ data loader    ] - descriptions.json      ", descriptionsData)
            console.log("[ data loader    ] - Arr newDates           ", newDates)
            console.log("[ data loader    ] - Arr newFields          ", newFields)
            console.log("[ data loader    ] - Arr newRankAssignment  ", newRankAssignment)
            console.log("[ data loader    ] - Arr newTitlesAssigment ", newTitlesAssigment)
            console.log("[ data loader    ] - Arr newStatistics      ", "totalSessions:", newSessionStatistics[0], "totalRounds", newSessionStatistics[1])
            console.log("[ data loader    ] - about.json             ", newAbout)
            console.log("[ data loader] - player.json            ", newPlayer)

            dispatch(storePlayerDates(newDates))
            dispatch(storePlayerResults(newTitlesAssigment))
            dispatch(storePlayerData(newPlayer))
            dispatch(storePlayerDescriptions(descriptionsData))
            dispatch(storeSetDataLoaded(true))
            dispatch(storeSessionsStatistics("total_sessions", newSessionStatistics[0]))
            dispatch(storeSessionsStatistics("total_rounds", newSessionStatistics[1]))
            dispatch(storeAbout(newAbout))
            //dispatch player
        }
    }, [isLoading, newDates, resultsData, newPlayer, newFields, newRankAssignment, newTitlesAssigment, descriptionsData, dispatch, error, newSessionStatistics, newAbout, newPlayer])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}