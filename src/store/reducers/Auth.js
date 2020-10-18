import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    loading: false,
    error: false,
    shouldShowed: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_LOGOUT:
            return {
                ...state,
                email: null,
            }

        case actionTypes.ON_SIGNUP: 
            return {
                ...state,
                loading: true,
                error: false,
                email: null,
            }

        case actionTypes.ON_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                email: action.email,
                shouldShowed: true,
            }
        
        case actionTypes.ON_SIGNUP_FAIL: 
            return {
                ...state,
                loading: false,
                error: true,
            }
        
        case actionTypes.NOTIFY_FST_SHOW: {
            return {
                ...state, 
                shouldShowed: false,
            }
        }

        default: 
            return {
                ...state,
            }
    }
}

export default reducer;