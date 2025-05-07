import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    storeDates,
    storeResultTable,
    storeDescriptionsList,
    storeSetDataLoaded,
    storePlayerImages
} from "../redux/actions"
import { transformResultDataAllDates } from "./dataloader.build.dates"
import { transformResultDataNewFields } from "./dataloader.build.fields"
import { transformResultDataRankAssigment } from "./dataloader.build.ranks"



export const DataLoader = () => {
    const [resultsData, setResultsData] = useState(null)
    const [imagesData, setImagesData] = useState(null)
    const [descriptionData, setDescriptionsData] = useState(null)

    const [newDates, setNewDates] = useState(null)
    const [newFields, setNewFields] = useState(null)
    const [newRankAssignment, setNewRankAssignment] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true;

        const loadAllData = async () => {
            try {
                setIsLoading(true)

                const [responseResultsJSON, responseImagesJSON, responseDescriptionsJSON] = await Promise.all([
                    fetch(`${process.env.PUBLIC_URL}/assets/results.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/images.json`),
                    fetch(`${process.env.PUBLIC_URL}/assets/descriptions.json`),
                ])

                if (!responseResultsJSON.ok) throw new Error(`results.json fetch failed with status ${responseResultsJSON.status}`)
                if (!responseImagesJSON.ok) throw new Error(`images.json fetch failed with status ${responseImagesJSON.status}`)
                if (!responseDescriptionsJSON.ok) throw new Error(`descriptions.json fetch failed with status ${responseDescriptionsJSON.status}`)


                const [resultsJSON, imagesJSON, descriptionsJSON] = await Promise.all([
                    responseResultsJSON.json(),
                    responseImagesJSON.json(),
                    responseDescriptionsJSON.json()
                ])

                if (isMounted) {
                    setResultsData(resultsJSON)
                    setImagesData(imagesJSON)
                    setDescriptionsData(descriptionsJSON)

                    const newDates = transformResultDataAllDates(resultsJSON)
                    setNewDates(newDates)
                    const newFields = transformResultDataNewFields(resultsJSON)
                    setNewFields(newFields)
                    const newRanks = transformResultDataRankAssigment(newFields)
                    setNewRankAssignment(newRanks)
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
            console.log("[ data loader    ] - descriptions.json      ", descriptionData)
            console.log("[ data loader    ] - Arr newDates           ", newDates)
            console.log("[ data loader    ] - Arr newFields          ", newFields)
            console.log("[ data loader    ] - Arr newRankAssignment  ", newRankAssignment)

            dispatch(storeDates(newDates))
            dispatch(storeResultTable(newRankAssignment))
            dispatch(storePlayerImages(imagesData))
            dispatch(storeDescriptionsList(descriptionData))
            dispatch(storeSetDataLoaded(true))

            //console.log("[ data loader    ] - results.json           ", resultsData)
            //console.log("[ data loader    ] - newObjectDates         ", newObjectDates)
            //console.log("[ data loader    ] - newRankAssignmentObject", newRankAssignmentObject)
            //console.log("[ data loader    ] - descriptions.json      ", descriptionData)

            //dispatch(storeDates(newObjectDates))
            //dispatch(storeResultTable(newRankAssignmentObject))
            //dispatch(storeDescriptionsList(descriptionData))
            //dispatch(storeSetDataLoaded(true))
        }
    }, [
        resultsData,
        imagesData,
        descriptionData,


        dispatch,
        newDates,
        newRankAssignment,
        isLoading,
        error
    ])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div>Loading...</div>
    return null
}