import { USER_LOGIN } from '../constants/ActionsTypes';
const initialState = {
    isLoggedIn: false,
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log(action);
            return state;
        default:
            break;
    }
}
export default userReducer;