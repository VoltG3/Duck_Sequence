import {
    SET_DATA_LOADED,
    PLAYER_DATES,
    PLAYER_RESULTS,
    PLAYER_IMAGES,
    PLAYER_DESCRIPTIONS,
    TARGET_DATE,
    TARGET_PLAYER,
    TARGET_AUDIO,
    TARGET_ABOUT
} from "./actionTypes"

export const storeSetDataLoaded = (isDataLoaded) => ({
    type: SET_DATA_LOADED,
    payload: isDataLoaded
})

export const storePlayerDates = (player_dates) => {
    console.log("[ dispatch   GET ] - newDates               ", player_dates)

    return {
        type: PLAYER_DATES,
        payload: player_dates
    }
}

export const storePlayerResults = (player_results) => {
    console.log("[ dispatch   GET ] - newRankAssigment       ", player_results)

    return {
        type: PLAYER_RESULTS,
        payload: player_results
    }
}

export const storePlayerImages = (player_images) => {
    console.log("[ dispatch   GET ] - imagesData             ", player_images)

    const asObject = {}
    player_images.forEach(hero => {
        asObject[hero.id] = hero
    })
    return {
        type: PLAYER_IMAGES,
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