import Constants from "expo-constants";
import axios from "axios";

console.log(Constants.manifest.extra.apiURL);

export const api = axios.create({
    baseURL: Constants.manifest.extra.apiURL,
    timeout: 2000
});

