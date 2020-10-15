import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questions: null,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_FETCH_DATA:
            return {
                ...state,
                questions: action.questions,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducers;