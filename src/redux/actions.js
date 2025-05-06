import {
    SET_DATA_LOADED,
    RESULT_TABLE,
    STORE_DESCRIPTIONS,
    TARGET_DESCRIPTION,
    TARGET_DATE,
    OBJECT_DATES
} from "./actionTypes"

export const storeSetDataLoaded = (isDataLoaded) => ({
    type: SET_DATA_LOADED,
    payload: isDataLoaded
})

export const storeResultTable = (result_table) => ({
    type: RESULT_TABLE,
    payload: result_table
})

export const storeDescriptionsList = (descriptionsArray) => {
    const asObject = {}
    descriptionsArray.forEach(hero => {
        asObject[hero.id] = hero
    })
    return {
        type: STORE_DESCRIPTIONS,
        payload: asObject
    }
}

export const storeTargetDescription = (target_description) => ({
    type: TARGET_DESCRIPTION,
    payload: target_description
})

export const storeDates = (dates) => ({
    type: OBJECT_DATES,
    payload: dates
})

export const storeTargetDate = (target_date) => ({
    type: TARGET_DATE,
    payload: target_date
})