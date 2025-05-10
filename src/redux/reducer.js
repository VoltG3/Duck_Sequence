import {
    SET_DATA_LOADED,
    PLAYER_DATES,
    PLAYER_RESULTS,
    PLAYER_IMAGES,
    PLAYER_DESCRIPTIONS,
    TARGET_DATE,
    TARGET_PLAYER,
    TARGET_AUDIO
} from './actionTypes'

const initialState = {
    isDataLoaded: false,
    player_dates: {},
    player_results: {},
    player_images: {},
    player_descriptions: {},
    target_date: "default",
    target_player: {
        target_player_id: "",
        target_player_name: "",
        target_player_rank: "",
        target_player_title: "",
        target_player_count: "",
    },
    audio: {
        play_audio_info : false
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA_LOADED:
            //console.log("[ reducer        ] - SET_DATA_LOADED        ", action.payload)

            return {
                ...state,
                isDataLoaded: action.payload,
            }

        case PLAYER_DATES:
            //console.log("[ reducer        ] - PLAYER_DATES           ", action.payload)

            return {
                ...state,
                player_dates: action.payload
            }

        case PLAYER_RESULTS:
            //console.log("[ reducer        ] - PLAYER_RESULTS         ", action.payload)

            return {
                ...state,
                player_results: action.payload
            }

        case PLAYER_IMAGES:
            //console.log("[ reducer        ] - PLAYER_IMAGES          ", action.payload)

            return {
                ...state,
                player_images: action.payload
            }

        case PLAYER_DESCRIPTIONS:
            //console.log("[ reducer        ] - PLAYER_DESCRIPTIONS    ", action.payload)

            return {
                ...state,
                player_descriptions: action.payload
            }

        case TARGET_DATE:
            //console.log("[ reducer        ] - TARGET_DATE            ", action.payload)

            return {
                ...state,
                target_date: action.payload
            }

        case TARGET_PLAYER:
            //console.log("[ reducer        ] - TARGET_PLAYER          ", action.payload)

            return {
                ...state,
                target_player: {
                    ...state.target_player,
                    [action.payload.field]: action.payload.value
                }
            }

        case TARGET_AUDIO:
            //console.log("[ reducer        ] - TARGET_AUDIO           ", action.payload)

            return {
                    ...state,
                audio: {
                    ...state.audio,
                    [action.payload.field]: action.payload.value,
                }
            }

        default:
            return state
    }
}