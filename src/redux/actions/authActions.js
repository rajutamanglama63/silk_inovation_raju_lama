import axios from 'axios'

import { LOGIN, LOGOUT } from '../constants/actionTypes'
import { setHeaders } from '../../setHeaders/index'

export const login = (email, password) => async (dispatch) => {
    const URL = "https://stagingapi.icash.com.np/api/login"
    try {
        const access_token = await axios.post(URL, setHeaders(), {email, password});
        console.log(access_token)
        if(access_token) {
            localStorage.setItem("access_token", access_token.data);
        }

        dispatch({
            type : LOGIN,
            payload : access_token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => async (dispatch) => {
    dispatch({
        type : LOGOUT
    })
};