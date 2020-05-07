export const HOST = "http://localhost:3000";
const API_URI = {
    TRANSACTION: "api/transaction",
    WALLET: "api/wallet",

}
const AUTH_URI = {
    JWT: "auth/jwt",
    USER: "auth/users",
}
const headers = new Headers();
headers.append("Content-Type", "application/x-www-form-urlencoded");
export { headers }
const URI = { API_URI, AUTH_URI }

export default URI