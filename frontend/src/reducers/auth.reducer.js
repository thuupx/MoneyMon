import * as types from '../constants/ActionsTypes';

const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    error: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_LOGIN_STARTED:
            console.log("REQUEST_LOGIN_STARTED");
            return {
                ...state,
                loading: true
            };
        case types.REQUEST_LOGIN_SUCCESS:
            console.log("REQUEST_LOGIN_SUCCESS with payload:", action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                token: action.payload
            }
        case types.REQUEST_LOGIN_FAILURE:
            console.log("REQUEST_LOGIN_FAILURE with error", action.payload);
            return {
                ...state,
                loading: false,
                token: null,
                error: action.payload
            }
        default:
            return state;
    }
}
export default authReducer;