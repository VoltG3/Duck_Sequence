import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    storePlayerDates,
    storePlayerResults,
    storePlayerDescriptions,
    storeSetDataLoaded,
    storePlayerImages, storeSessionsStatistics, storeAbout
} from "../redux/actions"
import { transformResultDataAllDates } from "./dataloader.build.dates"
import { transformResultDataNewFields } from "./dataloader.build.fields"
import { transformResultDataRankAssigment } from "./dataloader.build.ranks"
import { transformResultDataTilteAssigment } from "./dataloader.build.titles"
import {transformResultDataStatistics} from "./dataloader.build.stats";

/**
 * Represents a data loader component that manages fetching and processing of external JSON data
 * and dispatches the processed data to the global store.
 *
 * This component fetches data from three JSON files: results.json, images.json,
 * and descriptions.json, processes the data, and updates the application's state.
 * It also handles loading and error states.
 *
 * State variables:
 * - resultsData: Stores the fetched data from results.json.
 * - imagesData: Stores the fetched data from images.json.
 * - descriptionsData: Stores the fetched data from descriptions.json.
 * - newDates: Stores transformed date-related data derived from results.json.
 * - newFields: Stores transformed field data derived from results.json.
 * - newRankAssignment: Stores rank assignment data based on the transformed fields.
 * - newTitlesAssigment: Stores title assignment data based on the rank assignments.
 * - isLoading: Indicates whether the data is currently being loaded.
 * - error: Contains error messages if the data fetching or processing fails.
 *
 * Effects:
 * - The first `useEffect` handles loading the JSON data, transforming it, and updating the relevant state variables.
 * - The second `useEffect` watches the state variables, processes the retrieved data,
 *   and dispatches it to update the global application store once the data is fully loaded without errors.
 *
 * Dispatch actions:
 * - storePlayerDates: Stores the transformed date data.
 * - storePlayerResults: Stores the title assignment data.
 * - storePlayerImages: Stores the data from images.json.
 * - storePlayerDescriptions: Stores the data from descriptions.json.
 * - storeSetDataLoaded: Sets the state indicating that all required data is loaded.
 *
 * Return value:
 * - Renders a loading message while data is being fetched.
 * - Renders an error message in case an error occurs during data fetching or processing.
 * - Returns null once the data is successfully loaded and dispatched.
 */

export const DataLoader = () => {
    const [resultsData, setResultsData] = useState(null)
    const [imagesData, setImagesData] = useState(null)
    const [descriptionsData, setDescriptionsData] = useState(null)
    const [aboutData, setAboutData] = useState(null)

    const [newDates, setNewDates] = useState(null)
    const [newFields, setNewFields] = useState(null)
    const [newRankAssignment, setNewRankAssignment] = useState(null)
    const [newTitlesAssigment, setNewTitlesAssigment] = useState(null)
    const [newSessionStatistics, setNewSessionStatistics] = useState(null)
    const [newAbout, setNewAbout] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [responseResultsJSON, responseImagesJSON, responseDescriptionsJSON,  responseAboutJSON] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/results.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/images.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/about.json`)
                ])

                if (!responseResultsJSON.ok) throw new Error(`results.json fetch failed with status ${responseResultsJSON.status}`)
                if (!responseImagesJSON.ok) throw new Error(`images.json fetch failed with status ${responseImagesJSON.status}`)
                if (!responseDescriptionsJSON.ok) throw new Error(`descriptions.json fetch failed with status ${responseDescriptionsJSON.status}`)
                if (!responseAboutJSON.ok) throw new Error(`about.json fetch failed with status ${responseAboutJSON.status}`)


                const [resultsJSON, imagesJSON, descriptionsJSON, aboutJSON] = await Promise.all([
                    responseResultsJSON.json(),
                    responseImagesJSON.json(),
                    responseDescriptionsJSON.json(),
                    responseAboutJSON.json()
                ])

                if (isMounted) {
                    setResultsData(resultsJSON)
                    setImagesData(imagesJSON)
                    setDescriptionsData(descriptionsJSON)
                    setAboutData(aboutJSON)

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
            console.log("[ data loader    ] - images.json            ", imagesData)
            console.log("[ data loader    ] - descriptions.json      ", descriptionsData)
            console.log("[ data loader    ] - Arr newDates           ", newDates)
            console.log("[ data loader    ] - Arr newFields          ", newFields)
            console.log("[ data loader    ] - Arr newRankAssignment  ", newRankAssignment)
            console.log("[ data loader    ] - Arr newTitlesAssigment ", newTitlesAssigment)
            console.log("[ data loader    ] - Arr newStatistics      ", "totalSessions:", newSessionStatistics[0], "totalRounds", newSessionStatistics[1])
            console.log("[ data loader    ] - about.json             ", newAbout)

            dispatch(storePlayerDates(newDates))
            dispatch(storePlayerResults(newTitlesAssigment))
            dispatch(storePlayerImages(imagesData))
            dispatch(storePlayerDescriptions(descriptionsData))
            dispatch(storeSetDataLoaded(true))
            dispatch(storeSessionsStatistics("total_sessions", newSessionStatistics[0]))
            dispatch(storeSessionsStatistics("total_rounds", newSessionStatistics[1]))
            dispatch(storeAbout(newAbout))
        }
    }, [isLoading, newDates, resultsData, imagesData, newFields, newRankAssignment, newTitlesAssigment, descriptionsData, dispatch, error, newSessionStatistics, newAbout])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}