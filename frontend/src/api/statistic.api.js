import fetch from "cross-fetch";
import URI, { HOST } from "./config";
import { token } from "../utils/auth.util";
function queryParams(params) {
    return Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
}
export const getStatistics = async (params) => {
    const qParams = queryParams(params);
    console.log("getStatistics -> qParams", qParams);
    const response = await fetch(
        `${HOST}/${URI.API_URI.STATISTIC}?${qParams}`,
        {
            method: "get",
            headers: {
                authorization: "Bearer " + token().access_token,
            },
        }
    );
    const json = await response.json();
    if (!json) throw json;
    else return json;
};
