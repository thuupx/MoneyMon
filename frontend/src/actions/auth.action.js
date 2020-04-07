import * as types from '../constants/ActionsTypes';
import * as httpService from '../api';
export const requestLoginStarted = () => ({ type: types.REQUEST_LOGIN_STARTED });
export const requestLoginSuccess = user => ({ type: types.REQUEST_LOGIN_SUCCESS, payload: user });
export const requestLoginFailure = error => ({ type: types.REQUEST_LOGIN_FAILURE, payload: error });

export const userLogin = userData => async dispatch => {
    dispatch(requestLoginStarted());
    try {
        const user = await httpService.requestLogin(userData);
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(requestLoginSuccess(user));
    } catch (error) {
        dispatch(requestLoginFailure(error));
    }
}
