import {
    SET_DATA_LOADED,
    PLAYER_DATES,
    PLAYER_RESULTS,
    PLAYER_IMAGES,
    PLAYER_DESCRIPTIONS,
    TARGET_DATE,
    TARGET_PLAYER,
    TARGET_PLAYER_NAME,
    TARGET_PLAYER_RANK,
    TARGET_PLAYER_TITLE,
    TARGET_PLAYER_COUNT,
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

export const storeTargetPlayer = (target_player) => {
    console.log("[ dispatch   GET ] - BTN target player ID   ", target_player)

    return {
        type: TARGET_PLAYER,
        payload: target_player
    }
}

export const storeTargetPlayerName = (target_player_name) => {
    console.log("[ dispatch   GET ] - BTN target player name", target_player_name)

    return {
        type: TARGET_PLAYER_NAME,
        payload: target_player_name
    }
}

export const storeTargetPlayerRank = (target_player_rank) => {
    console.log("[ dispatch   GET ] - BTN target player rank ", target_player_rank)

    return {
        type: TARGET_PLAYER_RANK,
        payload: target_player_rank
    }
}

export const storeTargetPlayerTitle = (target_player_title) => {
    console.log("[ dispatch   GET ] - BTN target player title", target_player_title)

    return {
        type: TARGET_PLAYER_TITLE,
        payload: target_player_title
    }
}

export const storeTargetPlayerCount = (target_player_count) => {
    console.log("[ dispatch   GET ] - BTN target player count", target_player_count)

    return {
        type: TARGET_PLAYER_COUNT,
        payload: target_player_count
    }
}