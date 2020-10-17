import * as actionTypes from './actionTypes';

const axios = require('axios');

const url = 'https://my-burger-phl.firebaseio.com';

export const onFetchData = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ON_FETCH_DATA,
        });
        
        axios.get(url + `/allpractice/${id}.json`)
            .then(res => {
                dispatch({
                    type: actionTypes.ON_FETCH_DATA_SUCCESS,
                    questions: res.data,
                })
            })
            .catch(() => dispatch({
                type: actionTypes.ON_FETCH_DATA_FAIL,
            }))
        ;
    }

}

export const onClearData = () => {
    return {
        type: actionTypes.ON_CLEAR_DATA,
    }
}