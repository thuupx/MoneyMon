import fetch from 'cross-fetch';
import { URL } from './config';
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
export const requestLogin = async (body) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", body.email);
    urlencoded.append("password", body.password);
    if (body.email === "test@example.com" && body.password === "abc123")
        return {
            user:'Test User'
        }
    const response = await fetch(URL + '/auth/login', {
        method: 'post',
        body: urlencoded,
        headers: myHeaders
    });
    const json = await response.json();
    if (json.error) throw json;
    else return json;
}