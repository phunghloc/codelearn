import * as actionTypes from './actionTypes';

const axios = require('axios');

const url = 'https://my-burger-phl.firebaseio.com';

export const onSendPractice = (data, title, tag) => {
    console.log(data, title);
    return dispatch => {
        dispatch({ 
            type: actionTypes.ON_SEND_PRACTICE,
        });

        axios.post(url + '/allpractice.json', data)
            .then(res => {
                const titlePackage = {
                    title: title,
                    tag: tag,
                    id: res.data.name,
                }
                axios.post(url + '/alltitle.json', titlePackage)
                    .then(() => dispatch({type: actionTypes.ON_SEND_PRACTICE_SUCCESS}))
                    .catch(() => dispatch({type: actionTypes.ON_SEND_PRACTICE_FAIL}));
            })
            .catch(() => dispatch({type: actionTypes.ON_SEND_PRACTICE_FAIL}));
    }
}

export const onClearSendData = () => {
    return {
        type: actionTypes.ON_CLEAR_SEND_DATA,
    }
}