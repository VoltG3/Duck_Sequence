import {
    SET_DATA_LOADED,
    STATISTICS,
    ACTIONS,
    TARGET_STATES,
} from "./actionTypes"

export const storeSetDataLoaded = (isDataLoaded) => ({
    type: SET_DATA_LOADED,
    payload: isDataLoaded
})

export const storeStatistics = (field, value) => {
    console.log("[ dispatch   GET ] - statistics                   ", "field:", field, "value:", value)
    return {
        type: STATISTICS,
        payload: { field, value }
    }
}

export const storeActions = (field, value) => {
    console.log("[ dispatch   GET ] - actions                      ", "field:", field, "value:", value)
    return {
        type: ACTIONS,
        payload: { field, value }
    }
}

export const storeTargetState = (field, value) => {
    console.log("[ dispatch   GET ] - BTN target state field ", field, "value", value)

    return {
        type: TARGET_STATES,
        payload: { field, value }
    }
}