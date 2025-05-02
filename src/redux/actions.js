import {
    RESULT_TABLE, TARGET_TABLE, TIME_TABLE
} from "./actionTypes"

export const storeResultTable = (result_table) => ({
    type: RESULT_TABLE,
    payload: result_table
})

export const storeTimeTable = (time_table) => ({
    type: TIME_TABLE,
    payload: time_table
})

export const storeTargetTable = (target_table) => ({
    type: TARGET_TABLE,
    payload: target_table
})