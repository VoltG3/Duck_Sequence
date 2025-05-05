import {
    SET_DATA_LOADED, RESULT_TABLE, TARGET_DATE, OBJECT_DATES
} from "./actionTypes"

export const storeSetDataLoaded = (isDataLoaded) => ({
    type: SET_DATA_LOADED,
    payload: isDataLoaded
})

export const storeResultTable = (result_table) => ({
    type: RESULT_TABLE,
    payload: result_table
})

export const storeDates = (dates) => ({
    type: OBJECT_DATES,
    payload: dates
})

export const storeTargetDate = (target_date) => ({
    type: TARGET_DATE,
    payload: target_date
})