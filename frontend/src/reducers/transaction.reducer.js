import * as types from '../constants/ActionsTypes';

const initialState = {
    loading: false,
    transactions: [],
    error: null
}
const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_STARTED:
            console.log("REQUEST_STARTED");
            return {
                ...state,
                loading: true
            };
        case types.REQUEST_SUCCESS:
            console.log("REQUEST_SUCCESS with payload:", action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                transactions: action.payload
            }
        case types.REQUEST_FAILURE:
            console.log("REQUEST_FAILURE with error", action.payload);
            return {
                ...state,
                loading: false,
                transactions: [],
                error: action.payload
            }
        case types.ADD_TRANSACTION:
            const cloneState = { ...state }
            cloneState.transactions.push(action.payload);
            return cloneState;
        default:
            return state;
    }
}
export default transactionsReducer;