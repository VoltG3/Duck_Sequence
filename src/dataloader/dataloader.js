import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { storeDates, storeResultTable, storeSetDataLoaded } from "../redux/actions"
import { dataLoaderBuildDates } from "./dataloader.build.dates"
import { dataLoaderBuildFields } from "./dataloader.build.fields"
import { dataLoaderBuildRanks } from "./dataloader.build.ranks"

/**
 * DataLoader is a React functional component responsible for loading JSON data
 * from a specified endpoint, processing the data, and dispatching it to the state management store.
 *
 * Features:
 * - Fetches data from a JSON file located at "/assets/data.json".
 * - Processes the retrieved data to generate derived objects such as dates, fields, and rank assignments.
 * - Dispatches the processed data and updated state flags to the Redux store.
 *
 * State Management:
 * - jsonData: Stores the raw JSON data fetched from the endpoint.
 * - newObjectDates: Stores an object representing processed dates derived from the JSON data.
 * - newRankAssigmentObject: Stores processing results related to rank assignments derived from the JSON data.
 *
 * Side Effects:
 * - Fetches data on initial render through the `useEffect` hook and processes the data to create new states.
 * - Uses `useEffect` to respond to changes in jsonData, dispatching updated data and statuses to the Redux store.
 *
 * Dependencies:
 * - `useState`: Manages multiple state variables within the component.
 * - `useEffect`: Executes side effects (e.g., data fetching or store updates) in response to component lifecycle events.
 * - `useDispatch`: Dispatches actions to the Redux store.
 * - Functions `dataLoaderBuildDates`, `dataLoaderBuildFields`, and `dataLoaderBuildRanks`:
 *   Helper functions invoked to process fetched JSON data into specific derived objects.
 * - Redux actions `storeDates`, `storeResultTable`, and `storeSetDataLoaded`:
 *   Redux actions used to store processed data and update relevant states.
 *
 * Returns:
 * This component does not render any UI and returns `null`.
 */

export const DataLoader = () => {
    const [jsonData, setJsonData] = useState(null)
    const [newObjectDates, setNewObjectDates] = useState(null)
    const [, setNewFieldsObject] = useState(null)
    const [newRankAssigmentObject, setNewRankAssigmentData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/assets/data.json`)

            if (!response.ok) {
                console.error(`Error: HTTP status ${response.status}`)

                return
            }

            const JSONdata = await response.json()
            console.log("[ jsonData onloaded       ]", JSONdata)

            if (isMounted) {
                setJsonData(JSONdata)

                const dates = dataLoaderBuildDates(JSONdata)
                    setNewObjectDates(dates)
                    console.log("[ newObjectDates created  ]", dates)

                const fields = dataLoaderBuildFields(JSONdata)
                    setNewFieldsObject(fields)
                    console.log("[ newFieldsObject created ]", fields)

                const ranks = dataLoaderBuildRanks(fields)
                    setNewRankAssigmentData(ranks)
                    console.log("[ newRankAssigmentObject  ]", ranks)
            }
        }

        loadData().catch(error => {
            console.error("Error during loading data:", error)
        })

        return () => {
            isMounted = false
        }
    }, [])


    useEffect(() => {
        if (jsonData !== null) {
            dispatch(storeDates(newObjectDates))
            dispatch(storeResultTable(newRankAssigmentObject))
            dispatch(storeSetDataLoaded(true))
        }
    }, [jsonData, dispatch, newObjectDates, newRankAssigmentObject])

    return null
}