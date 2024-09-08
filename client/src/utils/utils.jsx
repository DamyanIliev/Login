import axios from "axios"

const serverUrl = import.meta.env.VITE_SERVER_URL;
const API_URL = serverUrl;

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json"
})

export const apiRequest = async ({url, method, data})=>{
    try {
        const result = await API ({url, method: method || "GET", data});
        return result.data;
    } catch (error) {
        const err = error.response.data;
        console.log(err);
        return { status: err.success, message: err.message };
    }
}