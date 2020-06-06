import fetch from 'cross-fetch';
import URI, { HOST } from './config';
import { token } from '../utils/auth.util';

export const createWallet = async (body) => {
    const response = await fetch(`${HOST}/${URI.API_URI.WALLET}`, {
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