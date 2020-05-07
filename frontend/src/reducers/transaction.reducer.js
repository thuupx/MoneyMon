import * as types from '../constants/ActionsTypes';

const initialState = {
    loading: false,
    transactions: [],
    error: null
}
const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_STARTED:
            return {
                ...state,
                loading: true
            };
        case types.REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                transactions: action.payload
            }
        case types.REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                transactions: [],
                error: action.payload
            }
        case types.ADD_TRANSACTION:
            const cloneState = { ...state }
            cloneState.transactions.push(action.payload);
            cloneState.loading = false;
            cloneState.error = null;
            return cloneState;
        default:
            return state;
    }
}
export default transactionsReducer;