import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    authReducer
})
export default createRootReducer;