import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: false,
    isSend: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_CLEAR_SEND_DATA:
            return {
                ...state,
                loading: false,
                error: false,
                isSend: false,
            }

        case actionTypes.ON_SEND_PRACTICE: 
            return {
                ...state,
                loading: true,
            }

        case actionTypes.ON_SEND_PRACTICE_SUCCESS:
            return {
                ...state,
                loading: false,
                isSend: true,
            }

        case actionTypes.ON_SEND_PRACTICE_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;