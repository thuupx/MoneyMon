import * as types from '../constants/ActionsTypes';
import * as httpService from '../api';

import { success, error } from './alert.action';

const requestRegisterStart = () => ({ type: types.REGISTER_START });
const requestRegisterSuccess = user => ({ type: types.REGISTER_SUCCESS, payload: user });
const requestRegisterFailure = () => ({ type: types.REGISTER_FAILURE });
export const registerUser = registrationData => async (dispatch) => {
    dispatch(requestRegisterStart());
    try {
        const user = await httpService.requestRegistration(registrationData);
        console.log("user", user);
        if (user) {
            dispatch(success(`Register completed with username: ${user.username}`));
            dispatch(requestRegisterSuccess(user));
        }
    } catch (err) {
        dispatch(error(err.detail||JSON.stringify(err)));
        dispatch(requestRegisterFailure());
    }
}