import axios from "axios";

export const api = axios.create({    
    baseURL: " http://0b6c-177-200-213-98.ngrok.io/api",
    timeout: 1000
});