import {
    SET_DATA_LOADED, RESULT_TABLE, PLAYER_IMAGES, STORE_DESCRIPTIONS, TARGET_DESCRIPTION, OBJECT_DATES, TARGET_DATE
} from './actionTypes'

const initialState = {
    isDataLoaded: false,
    result_table: {},
    player_images: {},
    descriptions_list : {},
    target_description: "",
    dates: {},
    target_date: "default"
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA_LOADED:
            return {
                ...state,
                isDataLoaded: action.payload,
            }

        case RESULT_TABLE:
            return {
                ...state,
                result_table: action.payload
            }

        case PLAYER_IMAGES:
            return {
                ...state,
                player_images: action.payload
            }

        case STORE_DESCRIPTIONS:
            return {
                ...state,
                descriptions_list: action.payload
            }

        case TARGET_DESCRIPTION:
            return {
                ...state,
                target_description: action.payload
            }

        case OBJECT_DATES:
            return {
                ...state,
                dates: action.payload
            }

        case TARGET_DATE:
            return {
                ...state,
                target_date: action.payload
        }

        default:
            return state
    }
}