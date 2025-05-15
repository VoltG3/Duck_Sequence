import {
    SET_DATA_LOADED,
    STATISTICS,

    PLAYER_RESULTS,
    PLAYER_DATA,

    TARGET_DATE,
    TARGET_PLAYER,
    TARGET_AUDIO,
    TARGET_STATES, ABOUT, ACTIONS
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

export const storePlayerResults = (player_results) => {
    console.log("[ dispatch   GET ] - newRankAssigment       ", player_results)

    return {
        type: PLAYER_RESULTS,
        payload: player_results
    }
}

export const storePlayerData = (player_data) => {
    console.log("[ dispatch   GET ] - palyerData             ", player_data)

    const asObject = {}
    player_data.forEach(hero => {
        asObject[hero.id] = hero
    })
    return {
        type: PLAYER_DATA,
        payload: asObject
    }
}



export const storeTargetDate = (target_date) => {
    console.log("[ dispatch   GET ] - target date ID         ", target_date)

    return {
        type: TARGET_DATE,
        payload: target_date
    }
}

export const storeTargetPlayer = (field, value) => {
    console.log("[ dispatch   GET ] - BTN target player field", field, "value", value)

    return {
        type: TARGET_PLAYER,
        payload: { field, value }
    }
}

export const storeTargetAudio = (field, value) => {
    console.log("[ dispatch   GET ] - BTN target audio field ", field, "value", value)

    return {
        type: TARGET_AUDIO,
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



export const storeAbout = (about) => {
    console.log("[ dispatch   GET ] - About                ", about)

    return {
        type: ABOUT,
        payload: about
    }
}