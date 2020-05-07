import * as types from '../constants/ActionsTypes';
import * as httpService from '../api';

export const requestTransactionStarted = () => ({ type: types.REQUEST_STARTED });
export const requestTransactionSuccess = transactions => ({ type: types.REQUEST_SUCCESS, payload: transactions });
export const requestTransactionFailure = error => ({ type: types.REQUEST_FAILURE, payload: error });
export const addTransactionToList = transaction => ({ type: types.ADD_TRANSACTION, payload: transaction });
export const createTransaction = transaction => ({ type: types.CREATE_TRANSACTION, payload: transaction })

export const getTransactions = () => async dispatch => {
    dispatch(requestTransactionStarted());
    try {
        let transactions = [];
        transactions = await httpService.getAllTransactions();
        dispatch(requestTransactionSuccess(transactions));
    } catch (error) {
        dispatch(requestTransactionFailure(error.detail));
    }
}
export const getTransactionById = id => async dispatch => {
    dispatch(requestTransactionStarted());
    try {
        //TODO: create http request
        let transaction = {};
        dispatch(addTransactionToList(transaction));
    } catch (error) {
        dispatch(requestTransactionFailure(error.detail));
    }
}
export const createNewTransaction = body => async dispatch => {
    dispatch(requestTransactionStarted());
    try {
        const newTransaction = await httpService.createTransaction(body);
        console.log("newTransaction", newTransaction);
        dispatch(addTransactionToList(newTransaction));
    } catch (error) {
        dispatch(requestTransactionFailure(error.detail));
    }
}