import * as types from '../constants/ActionsTypes';
import * as httpService from '../api';
export const requestLoginStarted = () => ({ type: types.REQUEST_LOGIN_STARTED });
export const requestLoginSuccess = token => ({ type: types.REQUEST_LOGIN_SUCCESS, payload: token });
export const requestLoginFailure = error => ({ type: types.REQUEST_LOGIN_FAILURE, payload: error });

export const userLogin = userData => async dispatch => {
    dispatch(requestLoginStarted());
    try {
        const token = await httpService.requestLogin(userData);
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(requestLoginSuccess(token));
    } catch (error) {
        dispatch(requestLoginFailure(error.detail));
    }
}
