import fetch from 'cross-fetch';
import URI, { HOST, headers } from './config';
import { token } from '../utils/auth.util';
export const getAllTransactions = async () => {
    const response = await fetch(`${HOST}/${URI.API_URI.TRANSACTION}`, {
        method: 'get',
        headers: {
            authorization: 'Bearer ' + token().access
        }
    });
    const json = await response.json();
    if (!json) throw json;
    else return json;
}
export const getTransactionById = async id => {
    const response = await fetch(`${HOST}/${URI.API_URI.TRANSACTION}/${id}`, {
        method: 'get',

    });
    const json = await response.json();
    if (!json) throw json;
    else return json;
}
export const createTransaction = async (body) => {
    const response = await fetch(`${HOST}/${URI.API_URI.TRANSACTION}`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + token().access
        }
    });
    const json = await response.json();
    if (!json.id) throw json;
    else return json;
}