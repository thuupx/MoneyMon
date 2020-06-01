import fetch from 'cross-fetch';
import URI, { HOST, headers } from './config';
export const requestLogin = async (body) => {
    const urlencoded = new URLSearchParams(Object.entries(body));
    const url = body.grant_type === "password"
        ? `${HOST}/${URI.AUTH_URI.JWT_TOKEN}`
        : `${HOST}/${URI.AUTH_URI.SOCIAL_TOKEN}`;
    const response = await fetch(url, {
        method: 'post',
        body: urlencoded,
        headers: headers
    });
    const json = await response.json();
    if (!json.access_token) throw json;
    else return json;
}
export const requestRegistration = async body => {
    const urlencoded = new URLSearchParams(Object.entries(body));
    const response = await fetch(`${HOST}/${URI.AUTH_URI.USER}/`, {
        method: 'post',
        body: urlencoded,
        headers: headers
    });
    const json = await response.json();
    if (!json.id) throw json;
    else return json;
}