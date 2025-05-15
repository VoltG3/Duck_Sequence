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
} from './actionTypes'

const initialState = {
    isDataLoaded: false,
    statistics: {
        statistics_navigation_dates: {},
        statistics_total_sessions: "",
        statistics_total_rounds: "",
        statistics_player_scores: {}
    },


    player_dates: {},
    player_results: {},
    player_data: {},
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
        play_audio_button : false,
        play_audio_info : false,
        play_audio_about : false
    },
    target_about: false,
    target_state: {
        play_animation_level_up : false,
        play_animation_level_down : false,
        play_animation_level_equal : false,
        sorting_cards: false,
        sorting_cards_next: false,
    },
    sessions_statistics: {
        total_sessions: "",
        total_rounds: ""
    },
    about: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA_LOADED:
            //console.log("[ reducer        ] - SET_DATA_LOADED              ", action.payload)
            return {
                ...state,
                isDataLoaded: action.payload,
            }

        case STATISTICS:
            //console.log("[ reducer        ] - STATISTICS                   ", "field:", action.payload.field, "value:", action.payload.value)
            return {
                ...state,
                statistics: {
                    ...state.statistics,
                    [action.payload.field]: action.payload.value,
                }
            }



        case PLAYER_RESULTS:
            //console.log("[ reducer        ] - PLAYER_RESULTS         ", action.payload)

            return {
                ...state,
                player_results: action.payload
            }

        case PLAYER_DATA:
            //console.log("[ reducer        ] - PLAYER_DATA          ", action.payload)

            return {
                ...state,
                player_data: action.payload
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

        case TARGET_ABOUT:
            //console.log("[ reducer        ] - TARGET_ABOUT           ", action.payload)

        return {
            ...state,
            target_about: action.payload,
        }

        case TARGET_STATES:
            //console.log("[ reducer        ] - TARGET_STATES          ", action.payload)

            return {
                ...state,
                target_state: {
                    ...state.target_state,
                    [action.payload.field]: action.payload.value,
                }
            }



        case ABOUT:
            //console.log("[ reducer        ] - PLAYER_DATES           ", action.payload)

            return {
                ...state,
                about: action.payload
            }

        default:
            return state
    }
}