import * as actionTypes from './actionTypes';
import questions from '../Questions';

export const onFetchData = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.ON_FETCH_DATA,
        });
        
        setTimeout(() => {
            dispatch({
                type: actionTypes.ON_FETCH_DATA_SUCCESS,
                questions: questions,
            });
        }, 500);
    }

}

export const onClearData = () => {
    return {
        type: actionTypes.ON_CLEAR_DATA,
    }
}