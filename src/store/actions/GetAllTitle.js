import * as actionTypes from './actionTypes';

const axios = require('axios');

const url = 'https://my-burger-phl.firebaseio.com';

export const onGetAllTitle = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.ON_GET_TITLE,
        });

        axios.get(url + '/alltitle.json')
            .then(res => dispatch({
                type: actionTypes.ON_GET_TITLE_SUCCESS,
                data: res.data,
            }))
            .catch(() => {
                dispatch({
                    type: actionTypes.ON_GET_TITLE_FAIL,
                })
            })
    }
}