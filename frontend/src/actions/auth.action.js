import * as types from '../constants/ActionsTypes';
import * as httpService from '../api';
const requestLoginStarted = () => ({ type: types.REQUEST_STARTED });
const requestLoginSuccess = token => ({ type: types.REQUEST_SUCCESS, payload: token });
const requestLoginFailure = error => ({ type: types.REQUEST_FAILURE, payload: error });



export const userLogin = userData => async dispatch => {
    dispatch(requestLoginStarted());
    try {
        const token = await httpService.requestLogin(userData);
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(requestLoginSuccess(token));
    } catch (error) {
        console.log("error", error);
        dispatch(requestLoginFailure(error.detail||error.error_description));
    }
}

