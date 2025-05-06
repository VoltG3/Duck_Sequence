import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { storeDates, storeResultTable, storeDescriptionsList, storeSetDataLoaded} from "../redux/actions"
import { dataLoaderBuildDates } from "./dataloader.build.dates"
import { dataLoaderBuildFields } from "./dataloader.build.fields"
import { dataLoaderBuildRanks } from "./dataloader.build.ranks"

/**
 * The DataLoader component is responsible for fetching and processing data
 * from external JSON resources. It handles data fetching, state management,
 * and dispatching to the Redux store for further use in the application.
 *
 * This component performs the following key functionalities:
 * - Fetches two external JSON files (data.json and descriptions.json) from the public assets folder.
 * - Parses and processes the fetched data to derive new objects such as dates and rank assignments.
 * - Updates internal state variables with the processed data to manage the component's workflow.
 * - Dispatches the processed data (dates, rank assignments, and descriptions) to the Redux store for
 *   global state management across the application.
 * - Displays loading or error messages during the data loading process.
 *
 * State Variables:
 * - `jsonData`: Holds the raw JSON data fetched from data.json.
 * - `newObjectDates`: Stores processed dates derived from the JSON data.
 * - `newRankAssignmentObject`: Stores rank assignment data generated from the processed fields of the JSON data.
 * - `descriptionData`: Holds the description data fetched from descriptions.json.
 * - `isLoading`: Indicates whether the data is currently being loaded.
 * - `error`: Stores any errors encountered during the data fetching process.
 *
 * Effects:
 * - The first useEffect handles data fetching, processing, and handles clean-up,
 *   ensuring no further state updates occur if the component is unmounted.
 * - The second useEffect monitors changes in the processed data and dispatches
 *   the data to the Redux store if there are no errors and the data is fully loaded.
 *
 * Display:
 * - Renders an error message if any error occurs during the data fetching process.
 * - Renders a loading message while data is being loaded.
 * - Does not render any UI once the data is successfully loaded and stored into the Redux state.
 */

export const DataLoader = () => {
    const [jsonData, setJsonData] = useState(null)
    const [newObjectDates, setNewObjectDates] = useState(null)
    const [newRankAssignmentObject, setNewRankAssignmentData] = useState(null)
    const [descriptionData, setDescriptionsData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [response, responseDesc] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/data.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`)
                ])

                if (!response.ok) throw new Error(`data.json fetch failed with status ${response.status}`)
                if (!responseDesc.ok) throw new Error(`descriptions.json fetch failed with status ${responseDesc.status}`)

                const [JSONdata, descData] = await Promise.all([
                    response.json(),
                    responseDesc.json()
                ])

                if (isMounted) {
                    setJsonData(JSONdata)
                    setDescriptionsData(descData)

                    const dates = dataLoaderBuildDates(JSONdata)
                    setNewObjectDates(dates)

                    const fields = dataLoaderBuildFields(JSONdata)
                    const ranks = dataLoaderBuildRanks(fields)
                    setNewRankAssignmentData(ranks)
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
        if (jsonData !== null && !isLoading && !error) {

            console.log("[ data loader    ] - jsonData               ", jsonData)
            console.log("[ data loader    ] - newObjectDates         ", newObjectDates)
            console.log("[ data loader    ] - newRankAssignmentObject", newRankAssignmentObject)
            console.log("[ data loader    ] - descriptionData        ", descriptionData)

            dispatch(storeDates(newObjectDates))
            dispatch(storeResultTable(newRankAssignmentObject))
            dispatch(storeDescriptionsList(descriptionData))
            dispatch(storeSetDataLoaded(true))
        }
    }, [jsonData, dispatch, newObjectDates, newRankAssignmentObject, descriptionData, isLoading, error])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}