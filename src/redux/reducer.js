import {
    RESULT_TABLE, DATE_TABLE, TARGET_DATE
} from './actionTypes'

const initialState = {
    result_table: {},
    date_table: {},
    target_date: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESULT_TABLE:
            return {
                ...state,
                result_table: action.payload
            }

        case DATE_TABLE:
            return {
                ...state,
                time_table: action.payload
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