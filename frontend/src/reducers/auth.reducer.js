import * as types from '../constants/ActionsTypes';

const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    error: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_STARTED:
            console.log("REQUEST_STARTED");
            return {
                ...state,
                loading: true
            };
        case types.REQUEST_SUCCESS:
            console.log("REQUEST_SUCCESS with payload:", action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                token: action.payload
            }
        case types.REQUEST_FAILURE:
            console.log("REQUEST_FAILURE with error", action.payload);
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