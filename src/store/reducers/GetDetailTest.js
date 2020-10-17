import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questions: null,
    loading: false,
    error: false,
    title: null,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_STORE_TITLE: 
        return {
            ...state,
            title: action.title,
        }

        case actionTypes.ON_CLEAR_DATA: 
            return {
                ...state,
                question: null,
                error: false
            }

        case actionTypes.ON_FETCH_DATA:
            return {
                ...state,
                loading: true,
                error: false,
                questions: null
            }

        case actionTypes.ON_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.questions,
            }

        case actionTypes.ON_FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducers;