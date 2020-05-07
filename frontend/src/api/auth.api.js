import fetch from 'cross-fetch';
import URI, { HOST } from './config';
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
export const requestLogin = async (body) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", body.username);
    urlencoded.append("password", body.password);
    const response = await fetch(`${HOST}/${URI.AUTH_URI.JWT}/create`, {
        method: 'post',
        body: urlencoded,
        headers: myHeaders
    });
    const json = await response.json();
    if (!json.access) throw json;
    else return json;
}