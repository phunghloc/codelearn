import * as actionTypes from './actionTypes';
import questions from '../Questions';

export const onFetchData = () => {
    return {
        type: actionTypes.ON_FETCH_DATA,
        questions: questions,
    }
}