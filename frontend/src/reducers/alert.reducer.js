import { alertConstants } from '../constants/ActionsTypes';
import notification from 'antd/lib/notification'
export default function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            notification["success"]({
                message: "Successfully",
                description: action.message
            });
            return {
                type: 'success',
                message: action.message
            };
        case alertConstants.ERROR:
            notification["error"]({
                message: "Error",
                description: "Register error: " + action.message
            });
            console.log("error");
            return {
                type: 'error',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}