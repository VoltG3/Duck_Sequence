import {
    SET_DATA_LOADED,
    STATISTICS,

    PLAYER_RESULTS,
    PLAYER_DATA,
    PLAYER_DESCRIPTIONS,
    TARGET_DATE,
    TARGET_PLAYER,
    TARGET_AUDIO,
    TARGET_ABOUT, TARGET_STATES,  ABOUT
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

export const storePlayerDescriptions = (player_descriptions) => {
    console.log("[ dispatch   GET ] - descriptionsData       ", player_descriptions)

    const asObject = {}
    player_descriptions.forEach(hero => {
        asObject[hero.id] = hero
    })
    return {
        type: PLAYER_DESCRIPTIONS,
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

export const storeTargetAbout = (target_about) => {
    console.log("[ dispatch   GET ] - target section about   ", target_about)

    return {
        type: TARGET_ABOUT,
        payload: target_about
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