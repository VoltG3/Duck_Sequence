import {
    RESULT_TABLE, TARGET_DATE, DATE_TABLE
} from "./actionTypes"

export const storeResultTable = (result_table) => ({
    type: RESULT_TABLE,
    payload: result_table
})

export const storeDateTable = (date_table) => ({
    type: DATE_TABLE,
    payload: date_table
})

export const storeTargetDate = (target_table) => ({
    type: TARGET_DATE,
    payload: target_table
})