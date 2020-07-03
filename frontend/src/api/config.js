export const HOST = process.env.HOST || "http://localhost:3000";
const API_URI = {
    TRANSACTION: "api/transaction",
    WALLET: "api/wallet",
    CATEGORY: "api/category",
    EXPORT: "api/export",
    STATISTIC: "api/statistic",
};
const AUTH_URI = {
    JWT_TOKEN: "auth/token",
    SOCIAL_TOKEN: "auth/convert-token",
    USER: "auth/users",
};
const headers = new Headers();
headers.append("Content-Type", "application/x-www-form-urlencoded");
export { headers };
const URI = { API_URI, AUTH_URI };

export default URI;
