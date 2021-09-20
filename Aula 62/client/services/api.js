import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: Constants.manifest.extra.apiURL,
    timeout: 2000
});

