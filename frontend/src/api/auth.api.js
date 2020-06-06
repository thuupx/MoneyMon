import fetch from 'cross-fetch';
import URI, { HOST, headers } from './config';
export const requestLogin = async (body) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", body.username);
    urlencoded.append("password", body.password);
    const response = await fetch(`${HOST}/${URI.AUTH_URI.JWT}/create`, {
        method: 'post',
        body: urlencoded,
        headers: headers
    });
    const json = await response.json();
    if (!json.access) throw json;
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