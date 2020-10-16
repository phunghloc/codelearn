import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questions: null,
    loading: false,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_CLEAR_DATA: 
            return {
                ...state,
                question: null,
            }

        case actionTypes.ON_FETCH_DATA:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.ON_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.questions,
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducers;