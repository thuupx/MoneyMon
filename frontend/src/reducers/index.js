import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import transactionsReducer from './transaction.reducer';
import alertReducer from './alert.reducer';
import registrationReducer from './registration.reducer';
const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    authReducer,
    transactionsReducer,
    alertReducer,
    registrationReducer
})
export default createRootReducer;