import * as actionTypes from '../actions/actionTypes';

// const test = ["responsibility", "where he could change some money", "have told", "To all people","milestone"];

const initialState = {
    answers: null,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        // case actionTypes.ON_FETCH_DATA:
        //     return {
        //         ...state,
        //         answers: null,
        //     }

        case actionTypes.ON_CLEAR_DATA: 
            return {
                ...state,
                answers: null,
            }

        case actionTypes.SEND_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducers;