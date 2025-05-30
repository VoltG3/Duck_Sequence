import {
    SET_DATA_LOADED,
    STATISTICS,
    ACTIONS,


    PLAYER_DATA,




    TARGET_STATES
} from './actionTypes'

const initialState = {
    isDataLoaded: false,
    statistics: {
        statistics_navigation_dates: {},
        statistics_total_sessions: "",
        statistics_total_rounds: "",
        statistics_player_scores: {}
    },
    actions: {
        visible_overlay_section_about: false,
        visible_overlay_section_info: false,
        active_date: "default",
            active_player: "",
        play_audio_button: false,
        play_audio_info: false,
        play_audio_about: false,
        settings_allow_audio: false,
        settings_allow_animation: false,
            set_animation_type_level_up: false,
            set_animation_type_level_down: false,
            set_animation_type_level_equal: false,

        info_target_player_id: "",
        info_target_player_rank: "",
        info_target_player_name: "",
        info_target_player_title: "",
        info_target_player_count: ""

    },
    target_state: {
        play_animation_level_up : false,
        play_animation_level_down : false,
        play_animation_level_equal : false,
        sorting_cards: false,
        sorting_cards_next: false,
    },
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

        case ACTIONS:
            //console.log("[ reducer        ] - ACTIONS                      ", "field:", action.payload.field, "value:", action.payload.value)
            return {
                ...state,
                actions: {
                    ...state.actions,
                    [action.payload.field]: action.payload.value,
                }
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

        default:
            return state
    }
}