import * as actionTypes from './actionTypes';

const axios = require('axios');

const key = 'AIzaSyC0xU5IY388ZsqD3FO_qP43EvEZgTHQOH8';
const urlSignUp = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
const urlLogin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

export const onAuth = (data, isLogin) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ON_SIGNUP,
        })

        const sendData = {
            email: data.email,
            password: data.password,
        }

        axios.post(isLogin ? urlLogin : urlSignUp, sendData)
            .then(res => dispatch({
                type: actionTypes.ON_SIGNUP_SUCCESS,
                email: res.data.email,
            }))
            .catch(() => dispatch({type: actionTypes.ON_SIGNUP_FAIL }))
    }
}

export const onLogout = () => {
    return {
        type: actionTypes.ON_LOGOUT,
    }
}

export const notifyFstShow = () => {
    return {
        type: actionTypes.NOTIFY_FST_SHOW,
    }
}
