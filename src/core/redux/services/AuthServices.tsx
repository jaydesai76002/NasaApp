import { ASTEROID_API, ASTEROID_RANDOM_API } from "../config/apiEndPoints";
import { baseApiCall } from "../config/BaseApiCall";


export const asteroidCall = (data: any) => {
    return baseApiCall({
        url: ASTEROID_API + data,
        method: "get",
    });
};

export const asteroidRandomCall = (data: any) => {
    return baseApiCall({
        url: ASTEROID_RANDOM_API + data,
        method: "get",
    });
};