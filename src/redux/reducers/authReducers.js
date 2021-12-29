import jwtDecode from 'jwt-decode'

import { LOGIN, LOGOUT } from '../constants/actionTypes'

const initialState = {
    fcm_token : localStorage.getItem("access_token"),
    email : null,
    password : null
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            const user = jwtDecode(action.payload);
            return {
                ...initialState,
                email : user.email,
                password : user.password
            }
        case LOGOUT:
            localStorage.removeItem("access_token");
            return {
                ...initialState,
                email : null,
                password : null
            }
        default:
            return state;
    }
};
