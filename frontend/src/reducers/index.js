import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import transactionsReducer from './transaction.reducer'
const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    authReducer,
    transactionsReducer
})
export default createRootReducer;