import {
    RESULT_TABLE, TIME_TABLE, TARGET_TABLE
} from './actionTypes'

const initialState = {
    result_table: {},
    time_table: {},
    target_table: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESULT_TABLE:
            return {
                ...state,
                result_table: action.payload
            }

        case TIME_TABLE:
            return {
                ...state,
                time_table: action.payload
            }

        case TARGET_TABLE:
            return {
                ...state,
                target_table: action.payload
        }

        default:
            return state
    }
}