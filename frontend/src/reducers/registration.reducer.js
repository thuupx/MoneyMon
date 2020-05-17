import * as types from '../constants/ActionsTypes';
const initialState = {
    registering: false,
    user: null
}
export default function registration(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_START:
            return { registering: true };
        case types.REGISTER_SUCCESS:
            return {
                registering: false,
                user: action.payload
            };
        case types.REGISTER_FAILURE:
            return { registering: false };
        default:
            return state;
    }
}