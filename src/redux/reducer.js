import {
    SET_DATA_LOADED, RESULT_TABLE, OBJECT_DATES, TARGET_DATE
} from './actionTypes'

const initialState = {
    isDataLoaded: false,
    result_table: {},
    dates: {},
    target_date: []
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

        case OBJECT_DATES:
            //console.log("REDUX", action.payload)
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